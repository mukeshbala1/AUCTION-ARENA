const axios = require('axios')

const DAY_MS = 24 * 60 * 60 * 1000

function toPositiveInt(value, fallback) {
  const number = Number.parseInt(value, 10)
  return Number.isFinite(number) && number > 0 ? number : fallback
}

function isEnabled() {
  return String(process.env.LOGIN_REMINDERS_ENABLED || '').toLowerCase() === 'true'
}

function getReminderConfig() {
  return {
    enabled: isEnabled(),
    apiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.RESEND_FROM_EMAIL || 'Auction Arena <onboarding@resend.dev>',
    replyTo: process.env.RESEND_REPLY_TO || undefined,
    appUrl: process.env.FRONTEND_URL || 'https://www.auctionarena.org',
    inactivityDays: toPositiveInt(process.env.LOGIN_REMINDER_INACTIVE_DAYS, 7),
    repeatDays: toPositiveInt(process.env.LOGIN_REMINDER_REPEAT_DAYS, 7),
    batchSize: Math.min(toPositiveInt(process.env.LOGIN_REMINDER_BATCH_SIZE, 100), 1000),
  }
}

function getLastSignInDate(user) {
  const dateValue = user?.last_sign_in_at || user?.created_at
  const date = new Date(dateValue || 0)
  return Number.isFinite(date.getTime()) ? date : null
}

function getDisplayName(user) {
  const metadata = user?.user_metadata || {}
  const raw =
    metadata.full_name ||
    metadata.name ||
    metadata.user_name ||
    user?.email?.split('@')[0] ||
    'there'

  const trimmed = String(raw).trim()
  if (!trimmed || trimmed.toLowerCase() === 'there') return 'there'

  // Clean email handles like "sbala.work" or "john_doe"
  if (trimmed.includes('.') || trimmed.includes('_')) {
    const firstPart = trimmed.split(/[._]/)[0]
    if (firstPart && firstPart.length > 1) {
      return firstPart.charAt(0).toUpperCase() + firstPart.slice(1)
    }
  }

  // Capitalize first character
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
}

function buildReminderEmail(user, config) {
  const displayName = getDisplayName(user)
  const safeName = escapeHtml(displayName)
  const safeEmail = escapeHtml(user?.email || '')
  const safeAppUrl = escapeHtml(config.appUrl)

  const subject =
    displayName && displayName.toLowerCase() !== 'there'
      ? `Your Auction Arena squad is waiting, ${displayName}`
      : 'Your Auction Arena squad is waiting'

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;-webkit-font-smoothing:antialiased;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
  <!-- Hidden preheader text to control preview snippet in inbox -->
  <div style="display:none;font-size:1px;color:#f8fafc;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">
    Your live cricket auction room and custom squads are ready for you whenever you want to draft.
  </div>

  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f8fafc;padding:32px 12px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;background-color:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(15,23,42,0.06);">
          
          <!-- Header Bar -->
          <tr>
            <td style="padding:28px 32px 20px;border-bottom:1px solid #f1f5f9;background-color:#ffffff;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <span style="font-size:18px;font-weight:800;letter-spacing:-0.3px;color:#0f172a;">
                      AUCTION <span style="color:#ea580c;">ARENA</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;padding:4px 10px;font-size:11px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;color:#ea580c;background-color:#fff7ed;border:1px solid #fed7aa;border-radius:20px;">
                      Cricket Simulator
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Email Body Content -->
          <tr>
            <td style="padding:28px 32px;background-color:#ffffff;">
              <h1 style="margin:0 0 16px;font-size:20px;font-weight:700;line-height:1.35;color:#0f172a;">
                Your arena is waiting for the next auction
              </h1>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
                Hi ${safeName},
              </p>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
                It has been a little while since your last visit to Auction Arena. We wanted to check in and let you know that your account and saved settings are ready whenever you want to draft.
              </p>

              <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#334155;">
                Whether you want to run a live IPL-style mega auction with friends or test bidding strategies within your virtual purse, your arena is ready:
              </p>

              <!-- Feature Highlights Box -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin:0 0 24px;">
                <tr>
                  <td style="padding:14px 16px 8px;">
                    <div style="font-size:14px;line-height:1.5;color:#1e293b;margin-bottom:8px;">
                      <strong style="color:#0f172a;">Live Auction Rooms:</strong> Create a room in seconds and invite friends with a simple 6-letter room code — no app download required.
                    </div>
                    <div style="font-size:14px;line-height:1.5;color:#1e293b;margin-bottom:8px;">
                      <strong style="color:#0f172a;">350+ Cricket Players:</strong> Realistic bidding pools, updated stats, and custom overseas player limits.
                    </div>
                    <div style="font-size:14px;line-height:1.5;color:#1e293b;">
                      <strong style="color:#0f172a;">Real-Time Action:</strong> Instant bidding, squad tracking, and live squad breakdown tools.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Call to Action Button -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:24px 0 20px;">
                <tr>
                  <td align="center">
                    <a href="${safeAppUrl}" style="background-color:#ea580c;color:#ffffff;display:inline-block;padding:13px 32px;font-size:15px;font-weight:600;text-decoration:none;border-radius:8px;box-shadow:0 1px 2px rgba(0,0,0,0.06);text-align:center;">
                      Open Auction Arena &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 20px;font-size:13px;line-height:1.5;color:#64748b;text-align:center;">
                Or jump in directly at: <a href="${safeAppUrl}" style="color:#ea580c;text-decoration:underline;">${safeAppUrl}</a>
              </p>

              <p style="margin:0 0 4px;font-size:14px;line-height:1.5;color:#334155;">
                See you on the pitch,
              </p>
              <p style="margin:0;font-size:14px;font-weight:600;color:#0f172a;">
                The Auction Arena Team
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;background-color:#f8fafc;border-top:1px solid #e2e8f0;">
              <p style="margin:0 0 6px;font-size:12px;line-height:1.5;color:#64748b;">
                You received this email because an Auction Arena account exists for <span style="color:#334155;font-weight:500;">${safeEmail}</span>.
              </p>
              <p style="margin:0;font-size:12px;line-height:1.5;color:#94a3b8;">
                If you did not create this account or no longer wish to receive check-ins, you can safely disregard this message.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const text = [
    `Hi ${displayName},`,
    '',
    'It has been a little while since your last visit to Auction Arena. We wanted to check in and let you know that your account and saved settings are ready whenever you want to draft.',
    '',
    'Whether you want to run a live IPL-style mega auction with friends or test bidding strategies within your virtual purse, your arena is ready:',
    '',
    '- Live Auction Rooms: Create a room in seconds and invite friends with a simple 6-letter room code — no app download required.',
    '- 350+ Cricket Players: Realistic bidding pools, updated stats, and custom overseas player limits.',
    '- Real-Time Action: Instant bidding, squad tracking, and live squad breakdown tools.',
    '',
    `Open Auction Arena: ${config.appUrl}`,
    '',
    'See you on the pitch,',
    'The Auction Arena Team',
    '',
    '---',
    `You received this email because an Auction Arena account exists for ${user.email || 'your email address'}.`,
    'If you did not create this account or no longer wish to receive check-ins, you can safely disregard this message.',
  ].join('\n')

  return { subject, html, text }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

async function sendEmail(user, config) {
  const email = buildReminderEmail(user, config)
  const payload = {
    from: config.fromEmail,
    to: [user.email],
    subject: email.subject,
    html: email.html,
    text: email.text,
    headers: {
      'X-Entity-Ref-ID': `reminder-${user.id}-${Date.now()}`,
    },
  }

  if (config.replyTo) {
    payload.reply_to = config.replyTo
  }

  await axios.post(
    'https://api.resend.com/emails',
    payload,
    {
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
      timeout: 15000,
    }
  )
}

async function fetchReminderState(supabase, userIds) {
  if (userIds.length === 0) return new Map()

  const { data, error } = await supabase
    .from('login_reminders')
    .select('user_id,last_sent_at')
    .in('user_id', userIds)

  if (error) throw error

  return new Map((data || []).map(row => [row.user_id, row.last_sent_at]))
}

async function markReminderSent(supabase, userId, email) {
  const now = new Date().toISOString()
  const { error } = await supabase
    .from('login_reminders')
    .upsert({
      user_id: userId,
      email,
      last_sent_at: now,
      updated_at: now,
    }, { onConflict: 'user_id' })

  if (error) throw error
}

function shouldSendReminder(user, lastSentAt, now, config) {
  if (!user?.id || !user?.email) return false
  if (config.forceAllUsers) return true

  const lastSignIn = getLastSignInDate(user)
  if (!lastSignIn) return false

  const inactiveForMs = now.getTime() - lastSignIn.getTime()
  if (inactiveForMs < config.inactivityDays * DAY_MS) return false

  if (!lastSentAt) return true

  const lastSentDate = new Date(lastSentAt)
  if (!Number.isFinite(lastSentDate.getTime())) return true

  return now.getTime() - lastSentDate.getTime() >= config.repeatDays * DAY_MS
}

async function runLoginReminderSweep(supabase, options = {}) {
  const config = { ...getReminderConfig(), ...options }
  if (!config.enabled) return { skipped: true, reason: 'disabled', sent: 0 }
  if (!config.apiKey) return { skipped: true, reason: 'missing_resend_api_key', sent: 0 }

  const now = options.now || new Date()
  const recordSends = options.recordSends !== false
  let page = 1
  let sent = 0
  let checked = 0
  const failures = []

  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({
      page,
      perPage: config.batchSize,
    })

    if (error) throw error

    const users = data?.users || []
    if (users.length === 0) break

    checked += users.length
    const reminderState = await fetchReminderState(supabase, users.map(user => user.id))
    const dueUsers = users.filter(user => shouldSendReminder(user, reminderState.get(user.id), now, config))

    for (const user of dueUsers) {
      try {
        await sendEmail(user, config)
        if (recordSends) {
          await markReminderSent(supabase, user.id, user.email)
        }
        sent += 1
      } catch (error) {
        failures.push({ userId: user.id, email: user.email, message: error.message })
        console.error('[login-reminders] failed to send:', user.id, error.message)
      }
    }

    if (users.length < config.batchSize) break
    page += 1
  }

  return { skipped: false, checked, sent, failures }
}

function startLoginReminderScheduler(supabase) {
  const config = getReminderConfig()
  if (!config.enabled) {
    console.log('[login-reminders] disabled')
    return null
  }

  const intervalHours = toPositiveInt(process.env.LOGIN_REMINDER_INTERVAL_HOURS, 24)
  const intervalMs = intervalHours * 60 * 60 * 1000

  const run = () => {
    runLoginReminderSweep(supabase)
      .then(result => console.log('[login-reminders] sweep complete:', result))
      .catch(error => console.error('[login-reminders] sweep failed:', error))
  }

  const initialDelayMs = toPositiveInt(process.env.LOGIN_REMINDER_INITIAL_DELAY_SECONDS, 60) * 1000
  const initialTimer = setTimeout(run, initialDelayMs)
  const intervalTimer = setInterval(run, intervalMs)

  console.log(`[login-reminders] scheduled every ${intervalHours}h after ${initialDelayMs / 1000}s`)

  return {
    stop() {
      clearTimeout(initialTimer)
      clearInterval(intervalTimer)
    },
  }
}

module.exports = {
  buildReminderEmail,
  shouldSendReminder,
  getReminderConfig,
  getDisplayName,
  runLoginReminderSweep,
  startLoginReminderScheduler,
}

