fetch('./../data/moovies.json')
.then(function(response){
   return response.json()
})
.then(function(data) {
   console.log('Response json : ', data)
  

   let divMoovies = document.querySelector('.moovies')
   
   data.forEach(moovies => {
        divMoovies.innerHTML = divMoovies.innerHTML +=`
        <div class="card p-5">
        <!--Poster -->
 <div class="row">
   <div class="col-lg-4 col-md-12 col-sm-12">
     <div class="card-image">
        <img src="${moovies.Poster}" alt="poster" />
     </div>
   </div>
        <!-- Fin de Poster -->

        <!-- Corp de notre carte -->
   <div class="col-8">
     <div class="card-body">
         <!-- Titre du film -->
     <div class="card-title fs-1">
             <h2>${moovies.Title}</h2>
     </div>
         <!-- Synopsis -->
     <div class="card-excerpt fs-5">
         <p>${moovies.Plot}</p>
     </div>
   </div>
   <div class="mini-image d-flex">
   <img class="img-fluid" src="${moovies.Images}" alt="">
   <img class="img-fluid ms-4 me-4" src="${moovies.Images[1]}" alt="">
   <img class="img-fluid" src="${moovies.Images[2]}" alt="">
   </div>
   <div class="rating">
  <input type="radio" name="html">
  <input type="radio" name="html">
  <input type="radio" name="html">
  <input type="radio" name="html">
  <input type="radio" name="html">
  <input type="radio" name="html">
  <input type="radio" name="html">
  <input type="radio" name="html">
  <input type="radio" name="html">
  <input type="radio" name="html">
</div>
          <!-- Fin du corp de notre carte -->
 </div>
</div>
`
   })
})
