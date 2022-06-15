<template>
  <div>
     
    
       <div class="w3-col m3">
           <div class="card col-md-8  shadow-lg p-3 mb-5 bg-white rounded" style="width: 17rem; margin-top:43px; position:fixed;">
            <h1 style="color:black; font-weight:normal; font-size:50px;">Create Tshirts</h1>
            <hr>
               <div class="card-body bg-danger ">
                 <div>
                   <label for="tshirtBrand">Tshirt Brand &nbsp;</label>
                   <input type="text" v-model="tshirt.tshirtBrand" class="w3-input w3-border" >
                 </div>
                 
                 <div>
                  <label for="fitType">Fit Type &nbsp;</label>
                  <input type="text" v-model="tshirt.fitType" class="w3-input w3-border">
                 </div>

                  <div>
                  <label for="size">size&nbsp;</label>
                  <input type="text" v-model="tshirt.size" class="w3-input w3-border">
                 </div>
                 
                  <div>
                  <label for="price">Price &nbsp;</label>
                  <input type="number" v-model="tshirt.price" class="w3-input w3-border">
                 </div>
                 
                  
                 
                  <button class="btn btn-sm btn-secondary border border-light" @click="submitTshirts" style="margin-top:50px; margin-left:105px;">Create Tshirts</button>
          
          </div>

         </div>
        </div>
      
          <div class="col-md-8  shadow-lg p-3 mb-5 bg-white rounded" style="position:absolute; left:31%; top:100px; ">
           <h1 style="color:black; font-weight:normal; font-size:50px;">List of Tshirts</h1>
              <table class="table table-striped table-hover">
                   
                <thead class="text-center">
                    <tr>
                        <th class="bg-danger">Tshirt Brand</th>
                        <th class="bg-danger">Fit Type</th>
                        <th class="bg-danger">Size</th>
                        <th class="bg-danger">Price</th>
                        
                      
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tshirt in tshirts" :key="tshirt.id" class="w3-hover-light-gray" style="cursor:pointer" @click="openTshirt(tshirt.id)">
                        <td>{{tshirt.tshirtBrand}}</td>
                        <td>{{tshirt.fitType}}</td>
                        <td>{{tshirt.size}}</td>
                        <td>{{tshirt.price}}</td>
                        
                      
                      
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
 
</template>

<script>
export default {
    data() {
        return {
            tshirt: {
                id:null,
                tshirtBrand:'',
                fitType:'',
                size:'',
                price:''
                
            },

            tshirts:[]
        }
    },
    methods: {
        addTshirts() {
           
        },
        getData(){
          fetch('http://127.0.0.1:8000/api/tshirts')
          .then(response=>response.json())
          .then(data=>this.tshirts = data)
          .catch(err=>console.log(err) )
        },

         openTshirt(tshirtId) {
            this.$router.push({
                name: 'view-tshirt',
                params: {
                    id: tshirtId
                }
            })
        },
           
         submitTshirts()  {
               fetch('http://127.0.0.1:8000/api/tshirts', {
                   method: 'post',
                   headers: {
                       "Content-Type":"application/json"
                   }, 
                   credentials: 'same-origin',
                  body: JSON.stringify(this.tshirt)

               })
                    .then(res=>res.json())
                    .then(data=>{
                        this.tshirts.unshift(data)
                        this.tshirt = {}
                    })
                    .catch(err=>console.log(err))

         },


    },

    mounted() {
      this.getData();
    },
}


    


</script>

<style>
</style>