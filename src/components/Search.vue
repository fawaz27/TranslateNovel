<template>
    
    
    <v-text-field
        
        :class="classe"
        color="blue-darken-2"  
        prepend-inner-icon="mdi-magnify"
        clearable
        v-model="searchText"
        label="Search"
        density="compact"
        variant="outlined"
        single-line
        hide-details
        @click:prepend-inner="searchAction"
        @keyup.enter="searchAction"
        >
    </v-text-field>
    
</template>
  
  <script>
  
  export default {
    name: 'search-menu',
    props:{
        searchAction: { 
            type: Function,
            default: null,
            required: true
        },
        classe: { 
            type: String,
            default: "",
            required: true
        }
    },
    data: () => ({
        searchText: '',
    }),
    computed: {
        searchText: {
            get() {
                return this.$store.state.searchText;
            },
            set(value) {
                this.$store.commit('setSearchText', value);
            },
        },
    },
    methods:{
        updateSearchText(newValue) {
            this.searchText = newValue;
            this.$emit('update:search-text', newValue);
        },
    }
    
  }
</script>

<style scoped>

    .text-field-search{
        
    }
    .v-text-field{
       
    }
   
</style>
  