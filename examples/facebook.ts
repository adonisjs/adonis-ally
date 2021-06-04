/*
 * @adonisjs/ally
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Route from '@ioc:Adonis/Core/Route'

Route.get('facebook', async ({ response }) => {
  return response.send('<a href="/facebook/redirect"> Login with facebook </a>')
})

Route.get('/facebook/redirect', async ({ ally }) => {
  return ally.use('facebook').redirect((request) => {
    request.scopes(['user', 'repo'])
  })
})

Route.get('/facebook/callback', async ({ ally }) => {
  try {
    const facebook = ally.use('facebook')
    if (facebook.accessDenied()) {
      return 'Access was denied'
    }

    if (facebook.stateMisMatch()) {
      return 'Request expired. Retry again'
    }

    if (facebook.hasError()) {
      return facebook.getError()
    }

    const user = await facebook.user()
    return user
  } catch (error) {
    console.log({ error: error.response })
    throw error
  }
})