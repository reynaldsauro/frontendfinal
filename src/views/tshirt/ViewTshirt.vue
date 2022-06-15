<template>

   
<div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 60rem; height:13rem; position:relative;
     left:7%;">  
          <div class="card-header">
                <button class="btn btn-sm bg-dark" style="color:dark; position:relative; left: 93.5%;" @click="deleteTshirt"> Delete</button>
                    <button class=" btn btn-sm bg-dark" @click="toggleEditor" style= "position:relative; left: -60px;">{{editor.label}}</button>
                      <table class="table table-hover text-center" style="margin-top:20px;">
                            <tr>

                                <th class="bg-info">Tshirt Brand</th>
                                <th class="bg-info">Fit Type</th>
                                <th class="bg-info">Size</th>
                                <th class="bg-info">Price</th>
                                
                            </tr>
                          
                            <tr>
                                <td>{{tshirts.tshirtBrand}}</td>
                                <td>{{tshirts.fitType}}</td>
                                <td>{{tshirts.size}}</td>
                                <td>{{tshirts.price}}</td>
                                
                            </tr>             
                            
                    </table>
             </div>
            <div>
      
            <div class="card shadow-lg  mb-5 bg-white rounded" style="width:60rem; position:absolute; top:120%; left:0%; ">
             <div v-if="editor.show">
                  <h3 class="text-center bg-warning" style="color:dimgray; padding-top:10px; padding-bottom: 10px;">
                      Edit Tshirt
                  </h3>
                   <hr>
                  <div class="card-body bg-gray">
                 <div>
                      <label for="tshirtBrand">&nbsp;&nbsp;Tshirt Brand &nbsp;</label>
                      <input type="text" v-model="tshirts.tshirtBrand"  class="w3-input w3-border" >
                   
                      <label for="fitType">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fit Type &nbsp;</label>
                      <input type="text" v-model="tshirts.fitType"  class="w3-input w3-border" >
                      
                      <label for="size">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size &nbsp;</label>
                      <input type="text" v-model="tshirts.size"  class="w3-input w3-border" >
                      <br><br>
                   
                   
                      <label for="price">&nbsp;&nbsp;Price &nbsp;</label>
                      <input type="number" v-model="tshirts.price"  class="w3-input w3-border" >

                     </div>

                     <button class="btn btn-sm btn-dark" style="color:white; position:relative; left: 93%;" @click="saveTshirt">Update</button>
                   </div>
                 </div>
          </div>
        </div>
     </div>

</template>

<script>
export default{
    props:['id'],
  
   data(){
       return{
           tshirts: {}, 
           editor: {
               show: false,
               label: "Edit Tshirt"
           }
       }
   },

   methods: {

       toggleEditor(){
           if(this.editor.show){
               this.editor = {show:false, label:"Edit Tshirt"}
           }else{
                this.editor = {show:true, label:"Cancel"}
           }
       },
       saveTshirt(){
                fetch('http://localhost:8000/api/tshirts/' + this.tshirt.id,{
                    method: 'put',
                    headers: {
                        'Content-Type' : "application/json"
                    },
                    credentials: 'same-origin',
                    body: JSON.stringify(this.tshirt)
                 })
                 .then(res=>res.json())
                 .then(data=>{
                     alert("  has been updated ")

                 })
                 .catch(err => console.log(err))
       },
          deleteTshirt(){
                 fetch('http://localhost:8000/api/tshirts/' + this.tshirt.id,{
                       method:'delete'
                 })
                 .then(res=>res.json())
                 .then(data=>{
                     alert("Tshirt has been deleted")
                     this.$router.push({
                        name: 'all-tshirts'
                     })
                    
                 })
                 .catch(err=>console.log(err))
         }
   },

   mounted(){
       fetch('http://localhost:8000/api/tshirts/' + this.id)
       .then(res => res.json())
       .then(data => this.tshirt = data)
       .then(err => console.log(err))
   }

}

</script>

<style scoped>
 h1{
     color:DarkSlateGray;
     font-weight:normal;
     font-size:35px;
 }

 td{
     color:DarkSlateGray;
 }

</style>