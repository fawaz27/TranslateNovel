<template>
    
    
	<v-container>

		<list-novel :last_page="last_page" :novels="novels" :page="page"  @update-page="UpdatePage"></list-novel>

	</v-container>
 

</template>

<script>
import ListNovel from '@/components/ListNovel.vue';
import { mapMutations, mapState } from 'vuex';

export default {
	name: 'search-novels-list',

	components: {
		ListNovel
	},

	data: () => ({
			page:1,
			keyword: '',
	}),

	async created(){
		try {
			this.keyword = this.$route.query.keyword || '';
    		this.page = Number(this.$route.query.page) || 1;
			await this.$store.dispatch('searchNovel',{keyword:this.keyword,page:this.page});
		} catch (error) {
			console.error(error);
		}
	},
	async mounted(){
		
	},

	computed:{
		...mapState(['novels','last_page','status']),
	},
	methods:{
		...mapMutations(['setPage','setNovels']),
		async updateData(page) {
			this.setPage(page);
			this.setNovels([]);
			try {
				await this.$store.dispatch('searchNovel',{keyword:this.keyword,page:this.page});
			} catch (error) {
				console.error(error);
			}
	},	
		UpdatePage(newPage) {
			this.page = newPage;
			this.$router.push({ name: 'searchNovelsList', query:{keyword:this.keyword,page:this.page} })
		}
	},
	watch: {
		'$route.query.keyword'() {
			this.keyword = this.$route.query.keyword || '';
			this.updateData(1); 
			
		},
		'$route.query.page'(newPageNumber) {
			this.page = Number(this.$route.query.page) || 1;
			this.updateData(newPageNumber);
    		
		},
	},

}
</script>

<style scoped>

</style>
