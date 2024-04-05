import Cookies from 'js-cookie'
import { useAppStore } from '@/store'
export const TOKEN_KEY = 'token'

export function getToken(): string {
	return Cookies.get(TOKEN_KEY)
}

export function setToken(token: string): void {
	Cookies.set(TOKEN_KEY, token)
	useAppStore().setState({ token })
}

// 删除token
export function removeToken(): void {
	Cookies.remove(TOKEN_KEY)
}
