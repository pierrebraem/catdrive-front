import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'
import App from '../../src/App.vue'

test('Increase and decrease the counter', async() => {
    const screen = render(App)

    await expect.element(screen.getByText('0')).toBeInTheDocument()

    await screen.getByRole('button', { name: '+' }).click()
    await screen.getByRole('button', { name: '+' }).click()
    await screen.getByRole('button', { name: '+' }).click()

    await expect.element(screen.getByText('3')).toBeInTheDocument()

    await screen.getByRole('button', { name: '-' }).click()
    await screen.getByRole('button', { name: '-' }).click()

    await expect.element(screen.getByText('1')).toBeInTheDocument()
})