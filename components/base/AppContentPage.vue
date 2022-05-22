<template>
  <section>
		<slot name="loading">
			<app-loading />
		</slot>
		<slot name="empty">
			
		</slot>
	</section>
</template>

<script>
import Vue from 'vue'
import AppLoading from '@/components/base/AppLoading'

export default Vue.extend({
	components: {
		AppLoading
	}
})
</script>
