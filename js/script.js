// Call load data menu
loadDataLeftMenu();
var linkSong = "song-detail.html";
var linkSinger = "singer-detail.html";


// Call 6 time for load the specific data
for (let indexload = 0; indexload < 12; indexload++) {
    let nameVariableTarget = "listSong0" + (indexload + 1);
    loadDataSong(true, false, nameVariableTarget, false);//Agruments: isLink, isSinger, target
    //console.log(nameVariableTarget);
}
loadDataSong(false, false, "listPlaylist", false);//Agruments: isLink, isSinger, target
loadDataSong(true, true, "listAuthor", false);//Agruments: isLink, isSinger, target
loadDataSong(true, false, "listGenre", true);//Agruments: isLink, isSinger, target

// Call load data small song
loadDataSmallSong(10, false, "listSongTable", true);
loadDataSmallSong(100, true, "listSongTableBillBoard", true);
loadDataSmallSong(10, true, "listSongTableBillBoardShort", true);
loadDataSmallSong(5, true, "listSongTableBillBoardVN", false);
loadDataSmallSong(5, true, "listSongTableBillBoardUKS", false);
loadDataSmallSong(5, true, "listSongTableBillBoardSK", false);

loadDataSmallSongShort(5, "listSongShort");




// Function binding data menu
function loadDataLeftMenu() {
    if (document.getElementById("listMenuLeft")) {
        let itemMenuLeft, x, acitveItem, listIcon, listContent, listLink, borderLine, vipImage, urlImage, forModal, anchorModal;
        itemMenuLeft = ""
        listIcon = ['ci-u-user', 'ci-u-disc', 'ci-u-library', 'ci-u-music', 'ci-u-chart', 'ci-u-genre', 'ci-u-create-playlist', 'ci-u-like-outline', 'ci-u-download'];
        listContent = ['Khám phá', 'Cá nhân', 'Thư viện', 'Nhạc mới', 'Xếp hạng', 'Thể loại', 'Tạo playlist', 'Yêu thích', 'Tải app'];
        listLink = ['index.html', 'individual.html', 'library.html', 'new.html', 'billboard.html', 'genre.html', 'playlist.html', 'like.html', 'https://play.google.com/store/apps/details?id=com.spotify.music'];
        borderLine = "";
        vipImage = "";
        urlImage = "img/vip.png";
        forModal = "data-bs-toggle='modal' data-bs-target='#modalCreatePlaylist'";


        for (x = 1; x <= listIcon.length; x++) {

            //Set active
            x === 1 ? acitveItem = 'active' : acitveItem = '';

            //Set modal
            x === 7 ? anchorModal = forModal : anchorModal = '';

            //Set border
            let xx = x % 3;
            xx === 0 ? borderLine = "<li class='border-bottom border-light my-2'></li>" : borderLine = '';

            //Set image
            let lastItem = listIcon.length - 1;
            x === lastItem ? vipImage = "<li class='my-3'><a href='#'><img src='" + urlImage + "'></a></li>" : vipImage = '';

            itemMenuLeft += "<li class='widget-list-item " + acitveItem + "'>";
            itemMenuLeft += "<a class='widget-list-link' href='" + listLink[x - 1] + "' " + anchorModal + " >";
            itemMenuLeft += "<i class='" + listIcon[x - 1] + "  ci-custom me-2'></i>";
            itemMenuLeft += "<span class='text-truncate'> " + listContent[x - 1] + " </span>";
            itemMenuLeft += "</a>";
            itemMenuLeft += "</li>";
            itemMenuLeft += vipImage;
            itemMenuLeft += borderLine;
        }
        document.getElementById("listMenuLeft").innerHTML = itemMenuLeft;
    }
}

// Function binding data song
function loadDataSong(isLink, isSinger, target, isAnotherKind) {
    let itemSong, index, flagSigner, hasLink, hasSinger, linkItem, contentItem, selectedItem, flagLink, contentTarget, contentText, contentImage, anotherKind, targetTo;

    itemSong = "";
    hasLink = isLink;
    hasSinger = isSinger;
    contentTarget = target;
    anotherKind = isAnotherKind;

    if (document.getElementById(contentTarget)) {
        if (!anotherKind) {
            contentText = "Born to Touch Your Feelings: Best of Rock Ballads is a compilation album by German rock band Scorpions a compilation album";
            contentImage = "https://picsum.photos/seed/picsum/200";

            // Check singer
            hasSinger ? flagSigner = "singer-thumb" : "";
            hasSinger ? targetTo = linkSinger : targetTo = linkSong;

            linkItem = "<a href='#' class='d-flex align-items-center justify-content-center w-100'><button type='button' class='btn btn-add rounded-pill btn-icon'><i class='ci-add'></i></button></a>";
            contentItem = "<div class='product-thumb " + flagSigner + "'><div class='position-relative w-100'><div class='product-card-actions'><a class='d-inline-block align-middle like-toggle' href='#' data-bs-toggle='button'><i class='ci-u-like-outline size-24'></i><i class='ci-u-like-solid size-24'></i></a><button type='button' class='btn btn-warning rounded-pill btn-icon mx-3 play-toggle' data-bs-toggle='button'><i class='ci-u-triangle'></i><i class='ci-u-pause-sign'></i></button><a class='d-inline-block align-middle' href='#'><i class='ci-u-more size-24'></i></a></div><a class='product-thumb-overlay rounded' href='"+targetTo+"'></a><div class='ratio ratio-1x1'><img src='" + contentImage + "' class='rounded w-100' alt='Product'></div></div></div><div class='card-body'><h6 class='product-title mb-0 text-truncate-multi h6'><a href='#'>" + contentText + "</a></h6></div>";

            selectedItem = "";
            flagLink = "";

            for (index = 1; index <= 6; index++) {
                if (!hasLink) {
                    index === 1 ? flagLink = "card-link" : flagLink = "";
                    index === 1 ? selectedItem = linkItem : selectedItem = contentItem;
                } else {
                    flagLink = "";
                    selectedItem = contentItem;
                }
                itemSong += "<div class='col-lg-2 col-md-3 col-sm-6 px-2 d-flex'><div class='card product-card-alt " + flagLink + "'>";
                itemSong += selectedItem;
                itemSong += "</div></div>";
            }
        } else {
            contentText = "Khúc nhạc vui";
            contentImage = "https://picsum.photos/720/480";

            contentItem = "<div class='product-thumb'><div class='ratio ratio-16x9'><img src='" + contentImage + "' class='rounded w-100' alt='Product'></div><a href='"+targetTo+"'class='card-img-overlay d-flex justify-content-center align-items-center'><h6 class='mb-0 text-truncate-multi h6 mb-0'>" + contentText + "</h6></a></div>"

            for (index = 1; index <= 12; index++) {
                itemSong += "<div class='col-lg-2 col-md-3 col-sm-6 px-2 d-flex'><div class='card product-card-alt w-100'>";
                itemSong += contentItem;
                itemSong += "</div></div>";
            }
        }


        document.getElementById(contentTarget).innerHTML = itemSong;
    }
}

// Function binding data small song
function loadDataSmallSong(totalItem, isBillboard, targetContent, isLongTable) {
    let itemSongTable, itemPlaying, itemToggle, vipLable, itemUp, itemBalance, itemDown, textBillboard, textLevel, index, imageContent, textContent, typeData, numberItem, contentTarget, longTable;

    itemSongTable = "";
    itemPlaying = "";
    itemToggle = "";
    vipLable = "";
    imageContent = "https://picsum.photos/200";
    textContent = "Yêu Một Người Gian Dối";
    typeData = isBillboard;
    numberItem = totalItem;
    contentTarget = targetContent;
    longTable = isLongTable;

    // For billboard
    itemUp = "<span class='text-up ci-caret'></span> <span class='text-level'>6</span>";
    itemBalance = "<span class='text-balance'></span> <span class='text-level'>2</span>";
    itemDown = "<span class='text-down ci-caret'></span> <span class='text-level'>1</span>";


    if (document.getElementById(contentTarget)) {
        for (index = 0; index < numberItem; index++) {

            // Assign tab, active status
            index === 6 ? itemPlaying = "active" : itemPlaying = ""
            index === 5 ? vipLable = "for-vip" : vipLable = ""

            itemSongTable += "<div class='d-flex flex-nowrap justify-content-between align-items-center u-row " + itemPlaying + vipLable + "'><div class='u-col col-01'>";
            // Check is billboard type
            if (typeData) {
                // For billboard
                index === 0 ? textBillboard = itemUp : textBillboard = itemDown;

                //Set the top level lable
                switch (index) {
                    case 0:
                        textLevel = "top-level";
                        break;
                    case 1:
                        textLevel = "second-level";
                        break;
                    case 2:
                        textLevel = "third-level";
                        break;
                    default:
                        textLevel = "";
                        break;
                }

                //Set the balance item randomly
                if (index === 3 || index === 5 || index === 7) {
                    textBillboard = itemBalance;
                }
                itemSongTable += "<div class='text-billboard d-flex align-items-center'><span class='text-number-decor d-flex align-items-center justify-content-center fw-bold " + textLevel + "'>" + (index + 1) + "</span><div class='text-gaph ms-3'>" + textBillboard + "</div><span class='icon-sign'><i class='ci-u-triangle'></i></span></div>";
            } else {
                itemSongTable += "<div class='text-index'><span class='text-number'>" + (index + 1) + "</span><span class='icon-sign'><i class='ci-u-triangle'></i></span></div>";
            }

            itemSongTable += "</div>";
            itemSongTable += "<div class='u-col col-02'><a href='"+linkSong+"'><div class='d-flex align-items-center'><div class='media-img flex-shrink-0'><div class='ratio ratio-1x1'><img src='" + imageContent + "'></div></div><div class='ps-3'><div class='fs-md text-truncate'>" + textContent + "</div><div class='fs-xs'>Như Việt</div></div><span class='vip-lable'>VIP</span></div></a></div>";
            // Check long or short
            if (longTable) {
                itemSongTable += "<div class='u-col col-03'>04:05</div><div class='u-col col-04'><a class='d-inline-block align-middle' href='#'><i class='ci-u-lyrics size-24'></i></a><a class='d-inline-block align-middle like-toggle mx-2' href='#' " + itemToggle + " data-bs-toggle='button'><i class='ci-u-like-outline size-24'></i><i class='ci-u-like-solid size-24'></i></a><a class='d-inline-block align-middle' href='#'><i class='ci-u-more size-24'></i></a></div>";
            }
            itemSongTable += "</div>";
        }


        document.getElementById(contentTarget).innerHTML = itemSongTable;
    }
}

// Function binding data small song
function loadDataSmallSongShort(totalItem, targetContent) {
    let itemSongTable,index, imageContent, textContent, numberItem, contentTarget;

    itemSongTable = "";
    imageContent = "https://picsum.photos/200";
    textContent = "Yêu Một Người Gian Dối";
    numberItem = totalItem;
    contentTarget = targetContent;


    if (document.getElementById(contentTarget)) {
        for (index = 0; index < numberItem; index++) {
            itemSongTable += "<div class='d-flex flex-nowrap justify-content-between align-items-center u-row'>";
            itemSongTable += "<div class='u-col col-02'><a href='"+linkSong+"'><div class='d-flex align-items-center'><div class='media-img flex-shrink-0'><div class='ratio ratio-1x1'><img src='" + imageContent + "'></div></div><div class='ps-3'><div class='fs-md text-truncate'>" + textContent + "</div><div class='fs-xs'>Như Việt</div></div></div></a></div>";
            itemSongTable += "<div class='u-col col-03'>04:05</div>";
            itemSongTable += "</div>";
        }


        document.getElementById(contentTarget).innerHTML = itemSongTable;
    }
}

function toggleFunction() {
    if (document.getElementById("toggleContent")) {
        let element = document.getElementById("toggleContent");
        let element1 = document.getElementById("imgFixed");
        let element2 = document.getElementById("size48");
        let element3 = document.getElementById("textContent");
        element.classList.toggle("toggle-on");
        let heightValue = (element1.offsetHeight - (element2.offsetHeight + 15)).toString() + "px";

        if (document.getElementsByClassName('toggle-on').length > 0) {
            element3.setAttribute("style", "max-height:" + heightValue);
        } else {
            element3.setAttribute("style", "max-height: 40px");
        }
        new SimpleBar(element3);
    }
}


document.getElementById("liveToastBtn").onclick = function() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'));
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show());
  }