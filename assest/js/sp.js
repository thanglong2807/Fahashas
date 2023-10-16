$(document).ready(function(){
    let perPage = 10;
let idPage = 1;
let start = 0;
let end = perPage;

const product = [
    { id: 1, image: "/assest/img/main/flash_sale/8935244877403.jpg", title: "Charlotte’s Web - E.B White" },
    { id: 2, image: "/assest/img/main/flash_sale/image_240997.jpg", title: "Meiko and the Fifth Treasure" },
    { id: 3, image: "/assest/img/main/flash_sale/8935244877403.jpg", title: "The Outsiders" },
    { id: 4, image: "/assest/img/main/flash_sale/060523.jpg", title: "The House on Mango Street" },
    { id: 5, image: "/assest/img/main/flash_sale/1105010064246.jpg", title: "Thirteen Reasons Why" },
    { id: 6, image: "/assest/img/main/flash_sale/3300000015651-1_1.jpg", title: "eter Pan" },
    { id: 7, image: "/assest/img/main/flash_sale/8935244890280.jpg", title: "he Old Man and the Sea" },
    { id: 8, image: "/assest/img/main/flash_sale/8936067606348.jpg", title: "rnest Hemmingway" },
    { id: 9, image: "/assest/img/main/flash_sale/8936067607802.jpg", title: "he Giver - Lois Lowry" },
    { id: 10, image: "/assest/img/main/flash_sale/9780241372791.jpg", title: "Number the Stars - Lois Lowry" },
    { id: 11, image: "/assest/img/main/flash_sale/9781474990806.jpg", title: "A Wrinkle In Time - Madeleine L’engle" },
    { id: 12, image: "/assest/img/main/flash_sale/9786043452792.jpg", title: "Silence Once Begun" },
    { id: 13, image: "/assest/img/main/flash_sale/9786043916416.jpg", title: "Sleep Donation" },
    { id: 14, image: "/assest/img/main/flash_sale/9786043916416.jpg", title: "Can’t and Won’t" },
    { id: 15, image: "/assest/img/main/flash_sale/b_a_30_6.jpg", title: "The News: A User’s Manual" },
    { id: 16, image: "/assest/img/main/flash_sale/b_a-1---s_-tay-_i_m-t_nh-_-n_ng-gi_n.jpg", title: "Every Day Is for the Thief" },
    { id: 17, image: "/assest/img/main/flash_sale/image_195509_1_21514.jpg", title: "The UnAmericans" },
    { id: 18, image: "/assest/img/main/flash_sale/image_195509_1_24936.jpg", title: "Kinder Than Solitude" },
    { id: 19, image: "/assest/img/main/flash_sale/image_242429.jpg", title: "What’s Important is Feeling" },
    { id: 20, image: "/assest/img/main/flash_sale/image_242429.jpg", title: "Blood Will Out" },
    { id: 21, image: "/assest/img/main/flash_sale/tashiro_1_ao_toai_2.jpg", title: "Cubed: A Secret History of the Workplace" },
    { id: 22, image: "/assest/img/main/flash_sale/nxbtre_full_27332023_043329.jpg", title: "The Last Illusion" },
    { id: 23, image: "/assest/img/main/flash_sale/tashiro_2_ao_toai_1.jpg", title: "Lost for Words: A Novel" },
    { id: 24, image: "/assest/img/main/flash_sale/z4280738561780_9c97b3b90b50cb7292c2c3830025cce3.jpg", title: "Summer House With Swimming Pool" },
    { id: 25, image: "/assest/img/main/flash_sale/image_240997.jpg", title: "I’ll Be Right There" },
    { id: 26, image: "/assest/img/main/flash_sale/image_240997.jpg", title: "English Pronuciation in use" },
    { id: 27, image: "/assest/img/main/flash_sale/image_240997.jpg", title: "Cambridge English Skills Real Listening & Speaking" },
    { id: 28, image: "/assest/img/main/flash_sale/image_240997.jpg", title: "Everyday Conversations English" },
]

let loc;
$('.loc').on( 'click', function (){
    html = '';
    loc = product.sort( function  (a, b) {
        let n1 = a.title.toLowerCase();
        let n2 = b.title.toLowerCase();
        if( n1 < n2 ) return -1;
        return 1;
    })
    const content = product.map((item, index) => {
            html += ` <div class="shopping-trends_item-product">
            <div class="shopping-trends_item-product-img">
              <a href="">
                <img
                  src="${item.image}"
                  alt=""
                />
              </a>
              <span class="sale">40%</span>
            </div>
            <h3 class="flash-sale_item-product-title">
              <a href=""> ${item.title}</a>
            </h3>
            <div class="shopping-trends_item-product-money">
              <p class="shopping-trends-money-sale sale-money">22.500đ</p>
              <p class="shopping-trends-money flash-sale-money">25.000đ</p>
            </div>
            <div class="shopping-trends-evaluate">
              <ul class="list-evaluate">
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <span>(0)</span>
              </ul>
            </div>
            <div class="flashsale-item-progress-value">
              <p>đã bán 28</p>
              <span></span>
            </div>
          </div>`
            return html;   
    });
    $('#product').html(html);

    
})

$('.loc1').on('click', function(){
    loc.reverse();
    html = '';
    const content = product.map((item, index) => {
        html += ` <div class="shopping-trends_item-product">
            <div class="shopping-trends_item-product-img">
              <a href="">
                <img
                  src="${item.image}"
                  alt=""
                />
              </a>
              <span class="sale">40%</span>
            </div>
            <h3 class="flash-sale_item-product-title">
              <a href=""> ${item.title}</a>
            </h3>
            <div class="shopping-trends_item-product-money">
              <p class="shopping-trends-money-sale sale-money">22.500đ</p>
              <p class="shopping-trends-money flash-sale-money">25.000đ</p>
            </div>
            <div class="shopping-trends-evaluate">
              <ul class="list-evaluate">
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <span>(0)</span>
              </ul>
            </div>
            <div class="flashsale-item-progress-value">
              <p>đã bán 28</p>
              <span></span>
            </div>
          </div>`
            return html;    
});
$('#product').html(html);

})

let productArr = [];
let showAdd = false;

const addBookBtn = document.getElementById('add');
const name = document.getElementById('name');
const imgLink = document.getElementById('imgLink');
const addBook = document.getElementById('add-book');
addBook.addEventListener('click', () => {
    if (imgLink.value !== '' && name.value !== '') {
        productArr.push({
            id: product.length + 1,
            image: imgLink.value,
            title: name.value
        })
    }
});


function highlightText() {
    const title = document.querySelectorAll('.content__product__item h3');
    title.forEach((title, index) => {
        let titleText = title.innerHTML;
        let indexOf = Number(titleText.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()));
        let searchTextLength = searchText.value.length;
        titleText = titleText.substring(0, indexOf) + "<span class='highlight'>" + titleText.substring(indexOf, indexOf + searchTextLength) + "</span>" + titleText.substring(indexOf + searchTextLength, titleText.length);
        title.innerHTML = titleText;
        console.log(titleText);
    })
}


productArr = product;


const pageConfig = document.querySelector('.page-config select');
const mySelect = document.getElementById('mySelect');
const countTotalPage = document.querySelector('.total-page');
const countTotalProduct = document.querySelector('.total-item');

let totalPages = Math.ceil(productArr.length / perPage);
const searchText = document.querySelector('.content__search input');
const searchBtn = document.getElementById('search');


function initRender(productAr, totalPage) {
    renderProduct(productAr);
    renderListPage(totalPage);
}

initRender(productArr, totalPages);

function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(productArr.length / perPage);
    countTotalPage.innerHTML = `Total pages: ${totalPages}`;
    countTotalProduct.innerHTML = `Total Product:  ${productArr.length}`
}

const deleteBtn = document.querySelectorAll('.content__product__item .delete');

deleteBtn.forEach((item, index) => {
    deleteBtn[index].addEventListener('click', () => {
        product.splice(index, 1);
        productArr = product;
        renderProduct(productArr)
    });
});

getCurrentPage(1);

searchBtn.addEventListener('click', () => {
    idPage = 1;
    productArr = [];
    product.forEach((item, index) => {
        if (item.title.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()) != -1) {
            productArr.push(item);
        }
    });
    if (productArr.length === 0) {
        $('.no-result').css('display', 'block')
    } else {
        $('.no-result').css('display', 'none')
    }
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
});

searchText.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
    }
});

addBookBtn.addEventListener('click', () => {
    showAdd = !showAdd;
    if (showAdd) {
        $('.add-book').css('display', 'flex');
    } else {
        $('.add-book').css('display', 'none');
    }
})


pageConfig.addEventListener('change', () => {
    idPage = 1;
    perPage = Number(pageConfig.value);
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    if (totalPages == 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    changePage();
});



function renderProduct(product) {
    html = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += ` <div class="shopping-trends_item-product">
            <div class="shopping-trends_item-product-img">
              <a href="">
                <img
                  src="${item.image}"
                  alt=""
                />
              </a>
              <span class="sale">40%</span>
            </div>
            <h3 class="flash-sale_item-product-title">
              <a href=""> ${item.title}</a>
            </h3>
            <div class="shopping-trends_item-product-money">
              <p class="shopping-trends-money-sale sale-money">22.500đ</p>
              <p class="shopping-trends-money flash-sale-money">25.000đ</p>
            </div>
            <div class="shopping-trends-evaluate">
              <ul class="list-evaluate">
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <li class="item-evaluete">
                  <i class="fa-solid fa-star"></i>
                </li>
                <span>(0)</span>
              </ul>
            </div>
            <div class="flashsale-item-progress-value">
              <p>đã bán 28</p>
              <span></span>
            </div>
          </div>`
            return html;   
        }
    });
    document.getElementById('product').innerHTML = html;
    highlightText();
}

function renderListPage(totalPages) {
    let html = '';
    html += `<li class="current-page active"><a>${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li><a>${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = ''
    }
    document.getElementById('number-page').innerHTML = html;
}

function changePage() {
    const idPages = document.querySelectorAll('.number-page li');
    const a = document.querySelectorAll('.number-page li a');
    for (let i = 0; i < idPages.length; i++) {
        idPages[i].onclick = function () {
            let value = i + 1;
            const current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', '');
            this.classList.add('active');
            if (value > 1 && value < idPages.length) {
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == 1) {
                $('.btn-prev').addClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == idPages.length) {
                $('.btn-next').addClass('btn-active');
                $('.btn-prev').removeClass('btn-active');
            }
            idPage = value;
            getCurrentPage(idPage);
            renderProduct(productArr);
        };
    }
}

changePage();

$('.btn-next').on('click', () => {
    idPage++;
    if (idPage > totalPages) {
        idPage = totalPages;
    }
    if (idPage == totalPages) {
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    console.log(idPage);
    const btnPrev = document.querySelector('.btn-prev');
    btnPrev.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});

$('.btn-prev').on('click', () => {
    idPage--;
    if (idPage <= 0) {
        idPage = 1;
    }
    if (idPage == 1) {
        $('.btn-prev').addClass('btn-active');
    } else {
        $('.btn-prev').removeClass('btn-active');
    }
    const btnNext = document.querySelector('.btn-next');
    btnNext.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});
});