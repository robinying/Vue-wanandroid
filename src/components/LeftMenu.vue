<template>
	<div>
		<div class="top">
			<van-image :src="logo" class="logo" @click="clickMenuItem"></van-image>
		</div>
	</div>
</template>

<script>
	export default {
		name: "LeftMenu",
		data() {
			return {
				logo: require('../assets/wan_android.png')
			}
		},
		created() {
			console.log("LeftMenu created")
		},
		methods: {
			clickMenuItem() {
				this.$emit('clickMenuItem');
			}
		}
	}
</script>

<style>
	.top {
		background: #00aaff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px 0;
		margin-bottom: 20px;
	}

	.logo {
		width: 40%;
	}
</style>
