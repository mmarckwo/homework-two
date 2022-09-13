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

function setCurrentPageContent(pageID) {
  let contentName = pageID + "Content";
  $("#app").html(eval(contentName));
}

export { setCurrentPageContent };
