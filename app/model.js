var homeContent = `<div class="home">
<div class="mainTitle">
  <h1>Bring the ocean back.</h1>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
    nihil natus, nobis rem a illo soluta.
  </p>
  <div class="buttonLinks">
    <a id="firstBtn" href="#">Take Part</a>
    <a id="secondBtn" href="#">Volunteering</a>
    <a id="thirdBtn" href="#">Donate</a>
  </div>
</div>
<div class="textBoxArea">
  <div class="textBoxRow">
    <div class="textBox">
      <h2>Passionate</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a
        reprehenderit, cumque at saepe aperiam quis eos soluta pariatur,
        eaque blanditiis voluptates.
      </p>
    </div>
    <div class="textBox">
      <h2>Determined</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
        autem aut, dolores eum maiores.
      </p>
    </div>
    <div class="textBox">
      <h2>Life-Saving</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        dolores earum quas, repellendus quos quia vitae quasi minus
        laboriosam architecto voluptatum at exercitationem magni. Nihil
        eos placeat obcaecati ut quis.
      </p>
    </div>
  </div>
</div>
</div>`;

var aboutContent = `<div class="about">
<div class="topTextArea">
  <div class="topTextSizeWrapper">
    <h1>Who We Are</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Reiciendis consequuntur beatae commodi neque obcaecati
      voluptatibus ut fugit, dignissimos eos, iste doloribus alias,
      asperiores nihil animi. Ea fugiat iusto deleniti odio?
    </p>
    <a href="#">Learn more about us.</a>
  </div>
</div>
<div class="teamArea">
  <div class="teamTextDesc">
    <h2>Core Team Members</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Necessitatibus deserunt, quis laborum amet alias harum officia
      voluptates rerum corporis culpa sit officiis provident vitae a
      saepe nostrum obcaecati iste voluptas.
    </p>
  </div>
  <div class="teamMemberColumn">
    <div class="teamMemberCard">
      <div class="profileImgColumn">
        <div class="profileImgWrapper">
          <img src="images/founder.png" alt="founder" />
        </div>
      </div>
      <div class="titleAndInfo">
        <h1>Johnathan Benavidez</h1>
        <p>Founder</p>
        <div class="infoPoints">
          <ul>
            <li>Capable</li>
            <li>Powerful</li>
            <li>Unwavering</li>
            <li>Caring</li>
          </ul>
        </div>
      </div>
      <div class="supportBtn">
        <a href="#">Support</a>
      </div>
    </div>
    <div class="teamMemberCard">
      <div class="profileImgColumn">
        <div class="profileImgWrapper">
          <img src="images/cofounder.png" alt="cofounder" />
        </div>
      </div>
      <div class="titleAndInfo">
        <h1>Daniel Cone</h1>
        <p>Co-Founder</p>
        <div class="infoPoints">
          <ul>
            <li>Innovative</li>
            <li>Idealistic</li>
            <li>Creative</li>
            <li>Proactive</li>
          </ul>
        </div>
      </div>
      <div class="supportBtn">
        <a href="#">Support</a>
      </div>
    </div>
  </div>
</div>
</div>`;

var servicesContent = `<div class="services">
<div class="leftSide">
  <section id="provide">
    <h1>What we provide</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Laudantium, ipsam iure. Repudiandae, excepturi accusantium,
      debitis, eligendi suscipit ullam earum cupiditate voluptatem ipsam
      explicabo numquam ducimus. Id sapiente praesentium quaerat
      laborum. Voluptatem eaque fugiat provident quam deleniti in? Omnis
      iste praesentium quidem soluta excepturi pariatur. Velit
      reiciendis nobis natus expedita non minima necessitatibus.
    </p>
  </section>
  <section id="cleaning">
    <h2>Cleaning</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur provident illum commodi quae rerum laborum officiis
      aliquam laudantium! Quia eius repudiandae incidunt totam quos
      eligendi veritatis debitis, voluptatibus fuga cumque. Magnam rem
      quia ab ducimus nam. Obcaecati quasi quibusdam ducimus consequatur
      sequi distinctio qui exercitationem? Eaque similique culpa enim.
      Dolores a eum error aliquid cupiditate provident deserunt libero
      distinctio explicabo.
    </p>
  </section>
  <section id="sealife">
    <h2>Sea Life</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
      quidem est doloribus aperiam nesciunt id pariatur voluptates
      deleniti atque dolor molestiae porro praesentium odio culpa quos
      debitis a, fugit in! Delectus neque rem eveniet maiores optio
      distinctio pariatur nulla architecto perferendis eaque illo ipsa,
      tempore accusantium cumque nemo vero vel perspiciatis eum! Illum
      doloribus repudiandae, aperiam maiores provident eligendi
      doloremque. Repellat eaque vero pariatur reiciendis quo,
      consequuntur, at hic sequi voluptas, sunt sed ullam non. Assumenda
      natus labore facilis atque ipsa deserunt. Commodi voluptatem ad
      consequuntur accusamus sapiente, reiciendis ut.
    </p>
  </section>
</div>
<div class="rightSide">
  <p>Page Content</p>
  <a href="#provide">What we provide</a>
  <a href="#cleaning">Cleaning</a>
  <a href="#sealife">Sea Life</a>
</div>
</div>`;

function setCurrentPageContent(pageID) {
  let contentName = pageID + "Content";
  $("#app").html(eval(contentName));
}

export { setCurrentPageContent };
