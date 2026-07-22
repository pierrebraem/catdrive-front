import { expect, describe, it, vi } from 'vitest'
import { render } from 'vitest-browser-vue'
import App from '../../src/App.vue'

describe('Basic API call', () => {
    it('get users from auth and show data on front', async () => {
        const fetch = vi.fn().mockResolvedValue({
            status: 200,
            json: async () => [
                {
                    firstname: 'Pierre',
                    lastname: 'Braem',
                    email: 'pierrebraem@test.com'
                }
            ]
        } as Response)

        vi.stubGlobal('fetch', fetch)

        const screen = render(App)
        const baseUrl = import.meta.env.VITE_API_URL

        expect(fetch).toHaveBeenCalledWith(baseUrl + '/test-db')
        await expect.element(screen.getByText('Pierre Braem pierrebraem@test.com')).toBeInTheDocument()
    })
})