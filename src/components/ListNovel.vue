<template>
    
	
        <v-row class="mt-6">

			
			
			<v-col cols="12" lg="8" :key="n" >

				<v-row v-if="novels.length==0">
					<v-col cols="12" sm="6"  v-for="n in 20" :key="n" >

						
							<v-card height="180">
							<div class="content-card">
								<div  class="left-card" >
									<v-img
									class="bg-white fill-height fill-width"
									aspect-ratio="16/9"
									cover			
									lazy-src="https://picsum.photos/id/11/100/60"
									></v-img>
								</div>

								<div  class="right-card" >
									<v-card-item>
										<div 
											class="font-weight-bold title text-capitalize" 
											
										
											>
											<!-- <h3 :title="novel.title.replaceAll('-', ' ')">{{  novel.title.replaceAll('-', ' ') }}></h3> -->
											<v-sheet  
												style="height: 10px; width: 300px;"
												color="grey-lighten-3"
											></v-sheet>
											<v-sheet 
												class="mt-2" 
												style="height: 10px; width: 300px;"
												color="grey-lighten-3"
											></v-sheet>

										</div>
									</v-card-item>
									<v-card-text>
										<div  style="overflow: hidden;">
											<div class="tit-infos-loading mb-3"> 
												<v-icon icon="mdi-pencil" class="mr-2" size="small"></v-icon> 
												<v-sheet
												class="mt-1" 
												style=" height: 10px; width: 150px;" 
												color="grey-lighten-3"
												></v-sheet>
											</div>
											<div  class="tit-infos-loading mb-3"> 
												<v-icon icon="mdi-progress-clock" class="mr-2" size="small"></v-icon> 
												<v-sheet
												class="mt-1" 
												style="height: 10px; width: 150px;" 
												color="grey-lighten-3"
												></v-sheet>
											</div>
											<div class="tit-infos-loading mb-3	"> 
												<v-icon icon="mdi-book" class="mr-2" size="small"></v-icon> 
												<v-sheet
												class="mt-1"
												style="height: 10px; width: 150px;"  
												color="grey-lighten-3"
												></v-sheet>
											</div>
										</div>
									</v-card-text>
								</div>
							</div>
						</v-card>
						
					
					</v-col>
					
				</v-row>
				<v-row v-else>
					<v-col cols="12" sm="6"  v-for="(novel, index) in novels" :key="index" >

						
							<v-card height="180">
							<div class="content-card">
								<div  class="left-card" >
									<v-img
									class="bg-white fill-height fill-width"
									aspect-ratio="16/9"
									cover
									:src="novel.coverImageUrl"
									lazy-src="https://picsum.photos/id/11/100/60"
									></v-img>
								</div>

								<div  class="right-card" >
									<v-card-item>
										<div 
											class="font-weight-bold title text-capitalize" 
											@click="$router.push({ name: 'novel', params:{name: novel.title } })"
										
											>
											<!-- <h3 :title="novel.title.replaceAll('-', ' ')">{{  novel.title.replaceAll('-', ' ') }}></h3> -->
											<h3 class="tit" :title="novel.title.replaceAll('-', ' ')">
												{{  novel.title.replaceAll('-', ' ') }}
											</h3> 

										</div>
									</v-card-item>
									<v-card-text>
										<div  style="overflow: hidden;">
											<div class="tit-infos mb-2"> <v-icon icon="mdi-pencil" size="small"></v-icon> {{  novel.author }}</div>
											<div  class="tit-infos mb-2"> <v-icon icon="mdi-progress-clock" size="small"></v-icon> {{  novel.status }}</div>
											<div class="tit-infos mb-2	"> <v-icon icon="mdi-book" size="small"></v-icon> {{  novel.status }}</div>
										</div>
									</v-card-text>
								</div>
							</div>
						</v-card>
						
					
					</v-col>
					
				</v-row>
				<div>
					<pagination :page="page" :last_page="last_page" @update-page="UpdatePage" ></pagination>
				</div>
			</v-col>
			
			
			<v-col cols="12"  lg="3" >
				<div class="tab">
						<div class="title-tab">
						<h2 class="tit">
							<v-icon icon="mdi-view-list" class="mr-2"></v-icon>
							<span class="glyphicon glyphicon-th-list"></span>
							<font style="vertical-align: inherit;">Genres </font>
						</h2>
						</div>
						<ul class="ul-list3">
							<li class="l1" v-for="(item,index) in this.getGenres()" :key="index">
							<router-link :to="`/genres/${item}`" class="con text-capitalize" :title="item" >
								<span class="glyphicon glyphicon-ok-sign"></span>
								<font style="vertical-align: inherit;">{{item}}</font>
							</router-link>
							</li>
						</ul>
				</div>
			</v-col>
        </v-row>
  
   
    
</template>
  
  <script>
import { mapState } from 'vuex';
import Pagination from './Pagination.vue'
  
  export default {
	components: { Pagination },
    name: 'List-Novel',
	props:{
        last_page: { 
            type: Number,
            default: 1,
            required: true
        },
		novels:{
			type: Array,
            required: true
		},
		page: { 
            type: Number,
            default: 1,
        },
    },
	async beforeCreate(){
		try {
			await Promise.all([
				this.$store.dispatch('getGenres')
			]);		
		} catch (error) {
			console.error(error);
		}
	},
  
    data: () => ({
		currentPage: 1,
		lastPage: 1,
		waiting:true
    }),
	methods:{
		UpdatePage(newPage) {
			this.$emit('update-page', newPage);
		},
		
		getGenres :function () {
			return this.$store.getters.getGenres
		},
	},
	...mapState(['genres'])
  }
  </script>

  <style scoped> 
	
	a{
		text-decoration: none;
		color: inherit;
		background-color : transparent, 
	} 
	a:hover{
		text-decoration: underline;
	}
	.content-card{
		height: 100%; 
		display: block;
		padding: 12px 15px 11px;
	}
	.left-card{
		position: relative; 
		width: 120px;
		height: 136px;
		margin-right: 15px;
		overflow: hidden; 
		float: left;
	}
	.right-card{
		overflow: hidden;
	}

	.title{
        max-width: 180px;

    }
	.title:hover{
		text-decoration: underline;
		cursor: pointer;
	}

	.tit{
		overflow: hidden;
		white-space: normal;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 16px;
		text-overflow: ellipsis;
		word-break: break-word;
	}

	.tit-infos{
		overflow: hidden;
		white-space: normal;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 16px;
		text-overflow: ellipsis;
		word-break: break-word;
	}

	.tit-infos-loading{
		overflow: hidden;
		white-space: normal;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 16px;
		text-overflow: ellipsis;
		word-break: break-word;
	}

	.tab{
		float: none;
		width: auto;
		margin-bottom: 15px;
		box-shadow: 0 0 6px #e9e9e9;
	}

	.title-tab{
		overflow: hidden;
		padding: 0 20px;
		line-height: 40px;
		border-bottom: 1px solid #e5e5e5;
	}

	.ul-list3 {
		overflow: hidden;
	}

	ul {
		list-style: none;
	}
	.ul-list3 li {
		width: 50%;
		float: left;
		line-height: 36.3px;
		border-bottom: 1px dashed #dcdcdc;
		border-right: 1px dashed #dcdcdc;
	}

	.ul-list3 .con {
		display: block;
		padding: 0 20px;
		font-size: 15px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}


	.v-col-md-6, .v-col, .v-col-12{
		padding: 8px;
	}


	@media (max-width: 1280px) {
		.ul-list3 li {
			width: 33.33%;
		}
	}
  </style>
  