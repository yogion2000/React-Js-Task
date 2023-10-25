import React from "react";
import './tech.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
export  default function Technologies(){
    return(
        <>
        <div className="card-color">
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
             <h2 > Learn 4.0 Technologies</h2>
             <p className="w-75">bootstrap, originally named Twitter Blueprint, was developed by Mark Otto and Jacob Thornton at Twitter as a framework to encourage consistency across internal tools. Before Bootstrap, various libraries were used for interface development, which led to inconsistencies and a high maintenance burden. According to Otto:
             </p>
            </div>
            <div>
            <div class="row row-cols-1 row-cols-md-2 g-4 tech-card">
  <div class="col">
    <div class="card  boxOne">
      <div class="card-body">
        <h5 class="card-title">Data science</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/128/4240/4240994.png" height="100px" width="100px"  class="align-self-end p-2"/>
    </div>
  </div>
  <div class="col">
    <div class="card boxTwo">
      <div class="card-body ">
        <h5 class="card-title">IOT Developer</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/128/10355/10355707.png" height="100px" width="100px"  class="align-self-end p-2" />
    </div>
  </div>
  <div class="col">
    <div class="card  boxThree">
      <div class="card-body">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text ">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/128/2177/2177275.png" height="100px" width="100px"  class="align-self-end p-2" />
    </div>
  </div>
  <div class="col">
    <div class="card boxFour">
      <div class="card-body ">
        <h5 class="card-title ">ML Engineer</h5>
        <p class="card-text ">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/128/3321/3321726.png" height="100px" width="100px"  class="align-self-end p-2" />
    </div>
  </div>
</div>
</div>
</div>
        </>
    );
}