    
    $(document).ready(function(){

        var gdsLanguage = {};

        if(localStorage.getItem("languageSet") == null){
            localStorage.setItem("languageSet", 0);
        }

        setLanguage(localStorage.getItem("languageSet"));

        $("#language-en").click(function(){
            if(localStorage.getItem("languageSet") == 0){
                return false;
            }
            localStorage.setItem("languageSet", 0);
            setLanguage(0);
        });
        $("#language-br").click(function(){
            if(localStorage.getItem("languageSet") == 1){
                return false;
            }
            localStorage.setItem("languageSet", 1);
            setLanguage(1);
        });  
    
        function setLanguage(language){
            if(language == 0){
                gdsLanguage = gdsEnglish;
                $("#language-en").addClass("language-button-on");
                $("#language-br").removeClass("language-button-on");
            }else{
                gdsLanguage = gdsPortuguese;
                $("#language-br").addClass("language-button-on");
                $("#language-en").removeClass("language-button-on");
            }
            redefineElmts();
        }

        function redefineElmts(){
            // Strings do Menu do Topo e Áreas do Site
            $("li.nav-item").animate({opacity: 0}, 60,"swing", function (){
                $("li.nav-item:nth-child(1) > a:nth-child(1)").html(gdsLanguage.boardTitle1);
                $("li.nav-item:nth-child(2) > a:nth-child(1)").html(gdsLanguage.boardTitle2);
                $("li.nav-item:nth-child(3) > a:nth-child(1)").html(gdsLanguage.boardTitle3);
                $("li.nav-item:nth-child(4) > a:nth-child(1)").html(gdsLanguage.boardTitle4);
            });

            $("div.mx-auto > p:nth-child(1)").animate({opacity: 0}, 60,"swing", function (){
                // Titulo da DIV IMAGENS
                $("div.mx-auto > p:nth-child(1)").html(gdsLanguage.boardTitle3);
            });

            $("div.container").animate({opacity: 0}, 60,"swing", function (){
                // Titulos das DIVs
                $("div.container:nth-child(3) > p:nth-child(1)").html(gdsLanguage.boardTitle1);
                $("div.container:nth-child(5) > p:nth-child(1)").html(gdsLanguage.boardTitle2);
                $("div.container:nth-child(8) > p:nth-child(1)").html(gdsLanguage.boardTitle4Fix);
                // Texto das DIVs (DIV - HISTÓRIA)
                $("div.container:nth-child(3) > div:nth-child(2) > p:nth-child(1)").html(gdsLanguage.boardText1Paragraph1);
                $("div.container:nth-child(3) > div:nth-child(2) > p:nth-child(4)").html(gdsLanguage.boardText1Paragraph2);
                $("div.container:nth-child(3) > div:nth-child(2) > p:nth-child(5)").html(gdsLanguage.boardText1Paragraph3);
                // Texto das DIVs (DIV - SISTEMAS)
                $("div.container:nth-child(5) > div:nth-child(2) > p:nth-child(1)").html(gdsLanguage.boardText2Paragraph1);
                $("div.media:nth-child(3) > div:nth-child(2) > label:nth-child(1)").html(gdsLanguage.boardText2Subtitle1);
                $("div.media:nth-child(3) > div:nth-child(2) > p:nth-child(2)").html(gdsLanguage.boardText2Subtext1);

                $("div.media:nth-child(4) > div:nth-child(2) > label:nth-child(1)").html(gdsLanguage.boardText2Subtitle2);
                $("div.media:nth-child(4) > div:nth-child(2) > p:nth-child(2)").html(gdsLanguage.boardText2Subtext2P1);
                $("div.media:nth-child(4) > div:nth-child(2) > p:nth-child(3)").html(gdsLanguage.boardText2Subtext2P2);

                $("div.media:nth-child(5) > div:nth-child(2) > label:nth-child(1)").html(gdsLanguage.boardText2Subtitle3);
                $("div.media:nth-child(5) > div:nth-child(2) > p:nth-child(2)").html(gdsLanguage.boardText2Subtext3);

                $("div.media:nth-child(6) > div:nth-child(2) > p:nth-child(2)").html(gdsLanguage.boardText2Subtext4);

                // Texto das DIVs (DIV - ADQUIRIR)
                $("div.container:nth-child(8) > div:nth-child(2) > p:nth-child(1)").html(gdsLanguage.boardText4Paragraph1);
                $("div.media:nth-child(1) > div:nth-child(2) > label:nth-child(1)").html(gdsLanguage.boardText4Subtitle1);
                $("div.media:nth-child(1) > div:nth-child(2) > p:nth-child(2) > font:nth-child(1)").html(gdsLanguage.boardText4Subtext1);
            });

            $("body > footer:nth-child(9) > p:nth-child(4)").animate({opacity: 0}, 60,"swing", function (){
                // Texto do Footer
                $("body > footer:nth-child(9) > p:nth-child(4)").html(gdsLanguage.footerParagraph1);
            });

            $("div.container").animate({opacity: 1},600);
            $("div.mx-auto > p:nth-child(1)").animate({opacity: 1},600);
            $("li.nav-item").animate({opacity: 1},600);
            $("body > footer:nth-child(9) > p:nth-child(4)").animate({opacity: 1},600);
        }

    });