<script lang="ts" setup name="account">
import { userStore } from '@/store'
import AxiosRequestError from '@/service/error'
import $api from '@/service/webRequest'
import { APIs } from '@/service/apiList'
import { debounce } from 'lodash-es'

console.log(debounce, 'lodash')

$api.get(APIs.GET_SHOPLIST_PROD)
	.then(() => {})
	.catch((err: AxiosRequestError) => {
		console.dir(err, 'err')
	})

const useUserStore = userStore()
const { name } = useUserStore
const debounceLogin = debounce(toLogin, 500)
function toLogin() {
	console.log(111)
}
</script>
<template>
	<div @click="debounceLogin">toLogin</div>
	<h2 style="color: pink">过来啦</h2>
	<div>{{ name }}</div>
	<router-view />
</template>
<style lang="scss" scoped></style>
