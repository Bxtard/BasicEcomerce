# punto 1

# punto 2 respuestas

## 1

## 2
 es una estructura que tiene las pantallas de un producto a manera de boceto

 #### herramientas
 Figma
 Adobe XD
 Sketch
## 3
  la diferencia es el scope de la variable
## 4
  git branch <nombre>
  git checkout -b <nombre>
  git switch -c <nombre>
## 5
  
## 6
  el pull request es una petición para mezclar ramas mientras que el git pull se utiliza en el   repo local para descargar una rama desde el repo remoto
## 7
  basicamente es una simulación del DOM
## 8
### html
```
<section class="c-section">
  <h2 class="c-section__title"><span>Our Services</span></h2>
  <ul class="c-services">
    <li class="c-services__item">
      <h3>Responsive Web Design</h3>
      <p>We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.</p>
    </li>
    <li class="c-services__item">
      <h3>UX Auditing</h3>
      <p>If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.</p>
    </li>
    <li class="c-services__item">
      <h3>Front End Development</h3>
      <p>We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we're happy to do so.</p>
    </li>
    <li class="c-services__item">
      <h3>UX Consultation</h3>
      <p>If you don't know what kind of service to request from us, don't worry. We can help and see what fits your business and your budget.</p>
    </li>
    <li class="c-services__item">
      <h3>Mobile Apps Design</h3>
      <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
    </li>
    <li class="c-services__item">
      <h3>UX Research</h3>
      <p>It's important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more.</p>
    </li>
  </ul>
</section>
```
### css
```
*{
  font-weight: bold;
}
.c-section__title{
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
  border-top : 10px solid #B1B1B1;
}

.c-services{
  display: grid;
  grid-template-columns : 1fr 1fr;
  list-style : none;
  padding: 0px ;
}

.c-services__item{
  background-color: #F7F5F7;
  margin: 5px;
  padding: 10px 0px;
  height: 150px;
}

.c-services__item:hover{
  box-shadow: 10px 10px 30px gray;
}
.c-services__item p{
  text-align: left;
  margin: 0px 15px;
}

.c-services__item h3{
  margin-left: 50px;
}
```