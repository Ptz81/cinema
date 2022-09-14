const movies = [{
  title: 'Думки мої тихі',
  image: 'https://i.ibb.co/35ZKPNZ/image.jpg',
  description: 'Молодий звукорежисер Вадим отримує замовлення – записати голоси закарпатських тварин. Це може стати його шансом назавжди залишити "незручну Україну" і переїхати до Канади, подалі від проблем.',
  date: '2020-01-16T00:00:00',
  director: 'Антоніо Лукіч',
  duration: '1год 54хв'
}, {
  title: 'Додому',
  image: 'https://i.ibb.co/9gN9dvj/Evge-poster.jpg',
  description: '«Додому» — український драматичний фільм 2019 року, повнометражний режисерський дебют Нарімана Алієва з Ахтемом Сеітаблаєвим у головній ролі.',
  date: '2019-07-14T00:00:00',
  director: 'Володимир Яценко',
  duration: '1год 36хв'
    }];


    // <header class="card__header">
    //     <h2 class="card__title">Думки мої тихі</h2>
    //     <span class="card__info">2019 - 1 год 34 хв</span>
    // </header>
    // <section class="card__content">
    //     <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto magnam nam tenetur quas. 
    //         Voluptate omnis magnam porro accusantium corrupti commodi ducimus qui delectus, vitae iste suscipit assumenda, officiis dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    //         Quisquam distinctio quis beatae labore, dicta qui ea ullam mollitia, assumenda iste ipsam suscipit tenetur aperiam id eius iure ipsum, aspernatur omnis?</p>
    //     <hr>
    //     <p>Режисер: Антоніо Лукіч</p>
    // </section>

function createContent(movies) {

    //card
    const article = document.createElement('article');
    article.classList.add('card');

    //header
    const header = document.createElement('header');
    header.classList.add('card__header');
    header.style.backgroundImage = `url(${movies.image})`;

    const h2 = document.createElement('h2');
    h2.classList.add('card__title');
    h2.textContent = movies.title;

    const info = document.createElement('span');
    info.classList.add('card__info');
    info.textContent = `${movies.date} - ${movies.duration}`;
    
    header.appendChild(h2);
    header.appendChild(info);

    //section
    const section = document.createElement('section');
    section.classList.add('card__content');
    
    const description = document.createElement('p');
    description.classList.add('card__description');
    description.textContent = movies.description;

    const line = document.createElement('hr');
    
    const director = document.createElement('p');
    director.textContent = movies.director;

    section.appendChild(description);
    section.appendChild(line);
    section.appendChild(director);

    article.appendChild(header);
    article.appendChild(section);

    return article;

}

function appendContent(content) {
    const el = document.getElementById('content');
    el.appendChild(content);
}
    
function init(movies) {
    const fragment = document.createDocumentFragment();

    movies.forEach((movies) => {
        fragment.appendChild(createContent(movies));
    });

    appendContent(fragment);
}

init(movies);