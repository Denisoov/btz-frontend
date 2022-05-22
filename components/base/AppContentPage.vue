<script>
import Vue from 'vue'

import { ContentStatuses } from '@/helpers/content-statuses'

import AppLoading from '@/components/base/AppLoading'
import AppButton from '@/components/base/AppButton'

export default Vue.extend({
	components: {
		AppLoading,
		AppButton
	},
	props: {
		status: {
			type: String,
			required: true,
		}
	},
	data: () => ({
		ContentStatuses
	})
})
</script>


<template>
  <section>
		<slot v-if="status === 'loading'" name="loading">
			<app-loading />
		</slot>
		<slot v-else-if="status === ContentStatuses.Ready" name="content" />
		<slot v-else-if="status === 'error'" name="error">
			<p>Произошла ошибка при загрузке данных.</p>
		</slot>
		<slot v-else-if="status === 'empty'" name="empty">
			<p class="empty__title" >У вас нет ни одного банка. Чтобы создать свой первый банк, нажмите на кнопку ниже</p>
      <app-button
        @click="openDialog"
        class="empty__create mini" 
        :title="'Создать'" 
      />
		</slot>
	</section>
</template>