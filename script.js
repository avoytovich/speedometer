// JavaScript File
$(document).ready(function () {
   $('.content_one').click(content_one);
   $('.content_two').click(content_two);
   $('.content_three').click(content_three);
   $('.acura').click(acura);
   $('.alfaRomeo').click(alfaRomeo);
   $('.audi').click(audi);
   $('.bentley').click(bentley);
   $('.cadillac').click(cadillac);
   $('.chevrolet').click(chevrolet);
   $('.chrysler').click(chrysler);
   $('.dodge').click(dodge);
   $('.fiat').click(fiat);
   $('.ford').click(ford);
   $('.honda').click(honda);
   $('.hyundai').click(hyundai);
   $('.jaguar').click(jaguar);
   $('.kia').click(kia);
   $('.lexus').click(lexus);
   $('.mazda').click(mazda);
   $('.mitsubishi').click(mitsubishi);
   $('.nissan').click(nissan);
   $('.opel').click(opel);
   $('.porsche').click(porsche);
   $('.renault').click(renault);
   $('.skoda').click(skoda);
   $('.subaru').click(subaru);
   $('.suzuki').click(suzuki);
   $('.volvo').click(volvo);
   $('.toyota').click(toyota);
   
   
   var model = {
         acura : {
             marka: "Acura (Акура)",
             name: ["MDX", "RDX", "RLX", "TLX"],
             src: ["images/small/acura_mdx.jpg", "images/small/acura_rdx.jpg", "images/small/acura_rlx.jpg", "images/small/acura_tlx.jpg"],
             alt: ["acura_mdx", "acura_rdx", "acura_rlx", "acura_tlx"]
             
         }, 
         
         alfaRomeo : {
             marka: "Alfa Romeo (Альфа Ромео)",
             name: ["GULIETTA", "MITO", "4C"],
             src: ["images/small/alfaromeo_gulietta.jpg", "images/small/alfaromeo_mito.jpg", "images/small/alfaromeo_4c.jpg"],
             alt: ["alfaromeo_gulietta", "alfaromeo_mito", "alfaromeo_4c"]
             
         },
         
         audi : {
             marka: "Audi (Ауді)",
             name: ["A4", "A5", "A6", "Allroad", "A8", "Q3", "Q5", "Q7"],
             src: ["images/small/audi-a4.jpg", "images/small/audi-a5.jpg", "images/small/audi-a6.jpg", "images/small/audi-a8.jpg", "images/small/audi-allroad.jpg", "images/small/audi-q3.jpg", "images/small/audi-q5.jpg", "images/small/audi-q7.jpg"],
             alt: ["audi-a4", "audi-a5", "audi-a6", "audi-a8", "audi-allroad", "audi-q3", "audi-q5", "audi-q7"]
             
         },
         
         bentley : {
             marka: "Bentley (Бентлі)",
             name: ["BENTAYGA", "CONTINENTAL", "FLYING SPUR", "MULSANNE"],
             src: ["images/small/bentley_bentayga.jpg", "images/small/bentley_continental.jpg", "images/small/bentley_flyingspur.jpg", "images/small/bentley_mulsanne.jpg"],
             alt: ["bentley_bentayga", "bentley_continental", "bentley_flyingspur", "bentley_mulsanne"]
             
         },
         
         cadillac : {
             marka: "Cadillac (Кадилак)",
             name: ["CTS", "ESCALADE", "SRX", "XT5"],
             src: ["images/small/cadillac_cts.jpg", "images/small/cadillac_escalade-1.jpg", "images/small/cadillac_srx.jpg", "images/small/cadillac_xt5.jpg"],
             alt: ["cadillac_cts", "cadillac_escalade-1", "cadillac_srx", "cadillac_xt5"]
             
         },
         
         chevrolet : {
             marka: "Chevrolet (Шевроле)",
             name: ["AVEO", "CAPTIVA", "CRUZE", "ORLANDO", "TAHOE", "TRAIL BLAZER"],
             src: ["images/small/chevrolet-aveo.jpg", "images/small/chevrolet-captiva.jpg", "images/small/chevrolet-cruze.jpg", "images/small/chevrolet-orlando.jpg", "images/small/chevrolet-tahoe.jpg", "images/small/chevrolet-trailblazer.jpg"],
             alt: ["chevrolet-aveo", "chevrolet-captiva", "chevrolet-cruze", "chevrolet-orlando", "chevrolet-tahoe", "chevrolet-trailblazer"]
             
         },
         
         chrysler : {
             marka: "Chrysler (Крайслер)",
             name: ["300С", "CROSSFIRE", "PACIFICA"],
             src: ["images/small/chrysler_300c.jpg", "images/small/chrysler_crossfire.jpg", "images/small/chrysler_pacifica.jpg"],
             alt: ["chrysler_300c", "chrysler_crossfire", "chrysler_pacifica"]
             
         },
         
         dodge : {
             marka: "Dodge",
             name: ["CALIBER", "CHALLENGER", "CHARGER", "DURANGO", "JOURNEY"],
             src: ["images/small/dodge_caliber.jpg", "images/small/dodge_challenger-1.jpg", "images/small/dodge_charger.jpg", "images/small/dodge_durango.jpg", "images/small/dodge_journey.jpg"],
             alt: ["dodge_caliber", "dodge_challenger-1", "dodge_charger", "dodge_durango", "dodge_journey"]
             
         },
         
         fiat : {
             marka: "Fiat (Фіат)",
             name: ["500", "BRAVO", "DOBLO", "PUNTO"],
             src: ["images/small/fiat_500.jpg", "images/small/fiat_bravo.jpg", "images/small/fiat_doblo.jpg", "images/small/fiat_punto.jpg"],
             alt: ["fiat_500", "fiat_bravo", "fiat_doblo", "fiat_punto"]
             
         },
         
         ford : {
             marka: "Ford (Форд)",
             name: ["FOCUS", "MONDEO", "EXPLORER", "KUGA", "GALAXY", "RANGER", "TRANSIT", "ECOSPORT", "FUSION"],
             src: ["images/small/foucs.jpg", "images/small/mondeo.jpg", "images/small/explorer.jpg", "images/small/kuga.jpg", "images/small/galaxy.jpg", "images/small/ranger.jpg", "images/small/transit.jpg", "images/small/ecosport.jpg", "images/small/fusion.jpg"],
             alt: ["foucs", "mondeo", "explorer", "kuga", "galaxy", "ranger", "transit", "ecosport", "fusion"]
             
         },
         
         honda : {
             marka: "Honda (Хонда)",
             name: ["ACCORD", "CIVIC", "CRV", "PILOT", "RIDGELINE"],
             src: ["images/small/honda_accord.jpg", "images/small/honda_civic.jpg", "images/small/honda_crv.jpg", "images/small/honda_pilot.jpg", "images/small/honda_ridgeline.jpg", "images/small/ranger.jpg", "images/small/transit.jpg", "images/small/ecosport.jpg", "images/small/fusion.jpg"],
             alt: ["honda_accord", "honda_civic", "honda_crv", "honda_pilot", "honda_ridgeline"]
             
         },
         
         hyundai : {
             marka: "Hyundai",
             name: ["ACCENT", "CRETA", "ELANTRA", "EQUUS", "GENESIS", "I30", "I40", "IX35", "SANTA FE", "SOLARIS", "SONATA", "STAREX", "TUCSON"],
             src: ["images/small/hyundai_accent.jpg", "images/small/hyundai_creta.jpg", "images/small/hyundai_elantra.jpg", "images/small/hyundai_equus.jpg", "images/small/hyundai_genesis.jpg", "images/small/hyundai_i30.jpg", "images/small/hyundai_i40.jpg", "images/small/hyundai_ix35.jpg", "images/small/hyundai_santafe.jpg", "images/small/hyundai_solaris.jpg", "images/small/hyundai_sonata.jpg", "images/small/hyundai_starex.jpg", "images/small/hyundai_tucson-1.jpg"],
             alt: ["hyundai_accent", "hyundai_creta", "hyundai_elantra", "hyundai_equus", "hyundai_genesis", "hyundai_i30", "hyundai_i40", "hyundai_ix35", "hyundai_santafe", "hyundai_solaris", "hyundai_sonata", "hyundai_starex", "hyundai_tucson-1"]
             
         },
         
         jaguar : {
             marka: "Jaguar (Ягуар)",
             name: ["F-PACE", "F-TYPE", "XE", "XF", "XJ"],
             src: ["images/small/jaguar_fpace.jpg", "images/small/jaguar_ftype.jpg", "images/small/jaguar_xe.jpg", "images/small/jaguar_xf.jpg", "images/small/jaguar_xj.jpg"],
             alt: ["jaguar_fpace", "jaguar_ftype", "jaguar_xe", "jaguar_xf", "jaguar_xj"]
             
         },
         
         kia : {
             marka: "Kia (Кіа)",
             name: ["CEED", "CERATO", "MOHAVE", "OPTIMA", "QUORIS", "RIO", "SORENTO", "SOUL", "SPORTAGE"],
             src: ["images/small/kia-ceed.jpg", "images/small/kia-cerato.jpg", "images/small/kia-mohave.jpg", "images/small/kia-optima.jpg", "images/small/kia-quoris.jpg", "images/small/kia-rio.jpg", "images/small/kia-sorento.jpg", "images/small/kia-soul.jpg", "images/small/kia-sportage.jpg"],
             alt: ["kia-ceed", "kia-cerato", "kia-mohave", "kia-optima", "kia-quoris", "kia-rio", "kia-sorento", "kia-soul", "kia-sportage"]
             
         },
         
         lexus : {
             marka: "Lexus (Лексус)",
             name: ["ES", "RX", "NX", "LX", "GS", "LS", "GX", "RC"],
             src: ["images/small/2016-Lexus-ES-350.jpg", "images/small/rx.jpeg", "images/small/lexus_nx.jpg", "images/small/2016-Lexus-LX-570.jpg", "images/small/GS-f.jpg", "images/small/ls.png", "images/small/2015LEX_GX.png", "images/small/lex_rc.png"],
             alt: ["2016-Lexus-ES-350", "rx", "lexus_nx", "2016-Lexus-LX-570", "GS-f", "ls", "2015LEX_GX", "lex_rc"]
             
         },
         
         mazda : {
             marka: "Mazda (Мазда)",
             name: ["3", "6", "CX-5", "CX-7", "CX-9", "BT-50"],
             src: ["images/small/mazda_3.jpg", "images/small/mazda_6.jpg", "images/small/mazda_cx5.jpg", "images/small/mazda_cx7.jpg", "images/small/mazda_cx9.jpg", "images/small/mazda_bt50.jpg"],
             alt: ["mazda_3", "mazda_6", "mazda_cx5", "mazda_cx7", "mazda_cx9", "mazda_bt50"]
             
         },
         
         mitsubishi : {
             marka: "Mitsubishi (Мітсубісі)",
             name: ["LANCER", "OUTLANDER", "PAJERO", "L200", "PAJERO SPORT", "MONTERO SPORT", "GALANT", "ASX"],
             src: ["images/small/lancer-1.jpg", "images/small/outlander.jpg", "images/small/pajero.jpg", "images/small/l200.jpg", "images/small/pajero-sport.jpg", "images/small/montero-sport.jpg", "images/small/galant.jpg", "images/small/asx.jpg"],
             alt: ["lancer-1", "outlander", "pajero", "l200", "pajero-sport", "montero-sport", "galant", "asx"]
             
         },
         
         nissan : {
             marka: "Nissan (Ніссан)",
             name: ["ALMERA", "JUKE", "MURANO", "NOTE", "PATHFINDER", "QASHQAI", "TEANA", "TIIDA", "X-TRAIL"],
             src: ["images/small/nissan-almera.jpg", "images/small/nissan-juke.jpg", "images/small/nissan-murano.jpg", "images/small/nissan-note.jpg", "images/small/nissan-pathfinder.jpg", "images/small/nissan-qashqai.jpg", "images/small/nissan-teana.jpg", "images/small/nissan-tiida.jpg", "images/small/nissan-x-trail.jpg"],
             alt: ["nissan-almera", "nissan-juke", "nissan-murano", "nissan-note", "nissan-pathfinder", "nissan-qashqai", "nissan-teana", "nissan-tiida", "nissan-x-trail"]
             
         },
         
         opel : {
             marka: "Opel (Опель)",
             name: ["ANTARA", "ASTRA H", "Astra J", "CORSA", "INSIGNIA", "MERIVA", "MOKKA", "ZAFIRA"],
             src: ["images/small/opel_antara.jpg", "images/small/opel_astra_h.jpg", "images/small/opel_astra_j.jpg", "images/small/opel_corsa.jpg", "images/small/opel_insignia.jpg", "images/small/opel_meriva.jpg", "images/small/opel_mokka.jpg", "images/small/opel_zafira.jpg"],
             alt: ["opel_antara", "opel_astra_h", "opel_astra_j", "opel_corsa", "opel_insignia", "opel_meriva", "opel_mokka", "opel_zafira"]
             
         },
         
         porsche : {
             marka: "Porsche (Порше)",
             name: ["CAYENNE", "PANAMERA", "MACAN", "CAYMAN"],
             src: ["images/small/porsche_cayenne.jpg", "images/small/porsche_panamera.jpg", "images/small/porsche_macan.jpg", "images/small/porsche_911.jpg"],
             alt: ["porsche_cayenne", "porsche_panamera", "porsche_macan", "porsche_911"]
             
         },
         
         renault : {
             marka: "Renault (Рено)",
             name: ["LOGAN", "SANDERO", "FLUENCE", "DUSTER", "SANDERO Stepway", "KAPTUR"],
             src: ["images/small/renault-logan-2.jpg", "images/small/renault-sandero.jpg", "images/small/renault-fluence.jpg", "images/small/Lux-duster.jpg", "images/small/renault-sandero-stapway.jpg", "images/small/Kaptur.jpg"],
             alt: ["renault-logan-2", "renault-sandero", "renault-fluence", "Lux-duster", "renault-sandero-stapway", "Kaptur"]
             
         },
         
         skoda : {
             marka: "Skoda (Шкода)",
             name: ["FABIA", "OCTAVIA", "RAPID", "ROOMSTER", "SUPERB", "YETI"],
             src: ["images/small/skoda_fabia.jpg", "images/small/skoda_oktavia.jpg", "images/small/skoda_rapid.jpg", "images/small/skoda_roomster.jpg", "images/small/skoda_superb.jpg", "images/small/skoda_yeti.jpg"],
             alt: ["skoda_fabia", "skoda_oktavia", "skoda_rapid", "skoda_roomster", "skoda_superb", "skoda_yeti"]
             
         },
         
         subaru : {
             marka: "Subaru (Субару)",
             name: ["FORESTER", "IMPREZA", "LEGACY", "OUTBACK", "TRIBECA", "XV"],
             src: ["images/small/subaru_forester.jpg", "images/small/subaru_impreza.jpg", "images/small/subaru_legacy.jpg", "images/small/subaru_outback.jpg", "images/small/subaru_tribeca.jpg", "images/small/subaru_xv.jpg"],
             alt: ["subaru_forester", "subaru_impreza", "subaru_legacy", "subaru_outback", "subaru_tribeca", "subaru_xv"]
             
         },
         
         suzuki : {
             marka: "Suzuki (Сузуки)",
             name: ["BALENO", "GRAND VITARA", "JIMNY", "LIANA", "SX4", "SWIFT"],
             src: ["images/small/suzuki_baleno.jpg", "images/small/suzuki_grandvitara.jpg", "images/small/suzuki_jimny.jpg", "images/small/suzuki_liana.jpg", "images/small/suzuki_sx4.jpg", "images/small/suzuki_swift.jpg"],
             alt: ["suzuki_baleno", "suzuki_grandvitara", "suzuki_jimny", "suzuki_liana", "suzuki_sx4", "suzuki_swift"]
             
         },
         
         volvo : {
             marka: "Volvo (Вольво)",
             name: ["S40", "S60", "S80", "XC60", "XC70", "XC90"],
             src: ["images/small/volvo-s40.jpg", "images/small/volvo-s60.jpg", "images/small/volvo-s80.jpg", "images/small/volvo-xc60.jpg", "images/small/volvo-xc70.jpg", "images/small/volvo-xc90.jpg"],
             alt: ["volvo-s40", "volvo-s60", "volvo-s80", "volvo-xc60", "volvo-xc70", "volvo-xc90"]
             
         },
         
         toyota : {
             marka: "Toyota (Тойота)",
             name: ["AURIS", "AVENSIS", "CAMRY", "COROLLA", "HIGHLANDER", "HILUX", "LAND CRUISER 200", "LAND CRUISER PRADO", "RAV 4"],
             src: ["images/small/toyota-auris.jpg", "images/small/toyota-avensis.jpg", "images/small/toyota-camry.jpg", "images/small/toyota-corolla.jpg", "images/small/toyota-highlander.jpg", "images/small/toyota-hilux.jpg", "images/small/toyota-lc200.jpg", "images/small/toyota-prado.jpg", "images/small/toyota-rav4.jpg"],
             alt: ["toyota-auris", "toyota-avensis", "toyota-camry", "toyota-corolla", "toyota-highlander", "toyota-hilux", "toyota-lc200", "toyota-prado", "toyota-rav4"]
             
         }
        
  };



function content_one () {
    $('#content_two, #content_three, #content_four').fadeOut(500);
    $('#content_one').fadeIn(500);
}

function content_two () {
    $('#content_one, #content_three, #content_four').fadeOut(500);
    $('#content_two').fadeIn(500);
}

function content_three () {
    $('#content_one, #content_two, #content_four').fadeOut(500);
    $('#content_three').fadeIn(500);
}

function acura () {
    all("acura");
}

function alfaRomeo () {
    all("alfaRomeo");
}

function audi () {
    all("audi");
}

function bentley () {
    all("bentley");
}

function cadillac () {
    all("cadillac");
}

function chevrolet () {
    all("chevrolet");
}

function chrysler () {
    all("chrysler");
}

function dodge () {
    all("dodges");
}

function fiat () {
    all("fiat");
}

function ford () {
    all("ford");
}

function honda () {
    all("honda");
}

function hyundai () {
    all("hyundai");
}

function jaguar () {
    all("jaguar");
}

function kia () {
    all("kia");
}

function lexus () {
    all("lexus");
}

function mazda () {
    all("mazda");
}

function mitsubishi () {
    all("mitsubishi");
}

function nissan () {
    all("nissan");
}

function opel () {
    all("opel");
}

function porsche () {
    all("porsche");
}

function renault () {
    all("renault");
}

function skoda () {
    all("skoda");
}

function subaru () {
    all("subaru");
}

function suzuki () {
    all("suzuki");
}

function volvo () {
    all("volvo");
}

function toyota () {
    all("toyota");
}

function all (n) {
    $('.about_all').empty();
    $("<div class=\"add\"></div>").prependTo('.about_all');
    $("<h2 id=\"addTwo\"></h2><p id=\"addThree\"></p>").prependTo(".add");
    $(".add").after("<p id=\"addFour\"></p>");
      for (var i = 0; i < model[n]['name'].length; i++) {
        $("#addThree").after("<figure id=\'addZero\' ><figcaption id=\"addOne\"></figcaption><img id=\"good\" class=\"img-thumbnail img-responsive\"><h4>+38(073)73-73-747</h4></figure>");
        $("#addOne").html(model[n]["name"][i]);
        $("#good").attr('src', model[n]["src"][i]);
        $("#good").attr('alt', model[n]["alt"][i]);
        
      }
    
    $("#addTwo").html("Скрутити пробіг (спідометр) " + model[n]["marka"]);
    $("#addThree").html("Професійна корекція спідометра " + model[n]["marka"] + " в СТО Спідометр. Коригування спідометра здійснюється сучасним обладнанням і безпечна для автомобіля.");
    $("#addFour").html("Хеш теги: #скрутити пробіг " + model[n]["marka"] + " #скрутити спідометр " + model[n]["marka"] + " #змотати пробіг " + model[n]["marka"] + " #скручування спідометра " + model[n]["marka"] + " #корекція пробігу " + model[n]["marka"] + " #коригування пробігу " + model[n]["marka"] + " #корекція спідометра " + model[n]["marka"] + " #коригування спідометра " + model[n]["marka"] + " #змотати спідометр " + model[n]["marka"]);
    
    $('#content_one, #content_two, #content_three').fadeOut(500);
    $('#content_four').fadeIn(500);
}



});