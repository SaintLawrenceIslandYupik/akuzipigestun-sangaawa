/* Full citation list from Badten et al. (2008), pg. xviii-xix
AANGHHAQ
AGHNAGH. KA YNGE.
AKIINGQWAAGH.
AYU. UNGIP. I
AYU. UNGIP. II
AYU. UNGIP. III
AYU. UNGIP. IV
IGHSANIT ALGHII
KALLAG.
KIILUUQ
MATERIALY
MRS. DELLA W.

Aanghhaq (Aynana and Nakazik 1987)
Aghnaghaghhaq Kayngeni (Slwooko 1976a)
Akiingqwaaghneghet (Apassingok 1994)
Ayumiim Ungipaghaatangi I (Kaneshiro 1972)
Ayumiim Ungipaghaatangi II (Kaneshiro 1975a)
Ayumiim Ungipaghaatangi III (Kaneshiro l 975b)
Ayumiim Ungipaghaatangi IV (Kaneshiro 1975c)
Ighsanitalghii Afsengaq (Badten 1972)
Kallagneghet (Apossingok 1993)
Kiiluuq (Orr 1975)
Materialy Po Yazyku u Fol'klory Eskimosov (Rubtsova 1954)
Mrs. Della Waghiyi's St. Lawrence Island Yupik
Texts with Grammatical Analysis (Nagai 2001)


NAAYV. PILCH.
NATEN YUUK
PANGEGH.
PINGA. KAVII.
PIYAA.
QATEP.
QUNGLUK
SIKIGG. METEGH.
SIKU. ESLA. ESGHA.

Naayvamun Pilghiit (Kaneshiro 1974a)
Naten Yuuk Paghqiimaa Tengaaneghmeng (Tambi 1936)
Pangeghtellghet (Kaneshiro and Badten 1975)
Pingayut Kaviighhaat (Kaneshiro 1973)
Piyaatalghiit (Kaneshiro 1975d)
Qateperewaaghmeng Aatkaqelghii Yuuk (Slwooko 1977)
Qungluk Liillghii Pugimameng (Kaneshiro 1974)b
Sikiggaankuk Meteghllugenkuk (Slwooko 1976b)
Sikumengllu Eslamenglllu Esghapalleghput (Oozeva et. al. 1997)


SIVUQ. NANGAGH. 1
SIVUQ. NANGAGH. 2
SIVUQ. NANGAGH. 3
SIVUQ. UNGIPAGH. (I)
SIVUQ. UNGIPAGH. II
SIVUQ. UNGIPAM.
SULUWET
UNGAZ. UNGIP.
UNGIPAGHAGH.
UNKUS.
WORDS ... PEOPLE

Sivuqam Nangaghnegha, vol. 1 (Apassingok et. al. 1985)
Sivuqam Nangaghnegha, vol. 2 (Apassingok et. al. 1987)
Sivuqam Nangaghnegha, vol. 3 (Apassingok et. al. 1989)
Sivuqam Ungipaghaatangi (Slwooko 1977)
Sivuqam Ungipaghaatangi II (Slwooko 1979)
Sivuqam Ungipamsugi (lrrigoo et. al. 1977)
Suluwet (Apossingok 1995)
Ungazighmiit Ungipaghaatangit (Badten and Krauss 1971)
Ungipaghaghlanga (Koonooka 2003)
Unkusequlghiik (Kaneshiro 1974c)
Words of the Real People (Fienup-Riordan and Kaplan 2007)


YUGG. KAYNGE.
YUGG. MAYER. 1976
YUGG. MAYER. 1978
YUP. ULUNG. 2
YUPIGET UNGIP.


Yuggaankuk Kayngenkuk (Slwooko 1976c)
Yuggankuk Mayeraaghpagenkukl(Slwooko 1976d)
Yuggankuk Mayeraaghpagenkuk (Slwooko 1978)
Yupiget Ulungat 2 (Ayn(g)anga et al. 1989)
Yupiget Ungipaghaghaatet (Menovshchikov 1989)

Examples taken from the Yupik Bible translation are cited by book, chapter
and verse and come from Test Edition - 15 Books of the Yupik New
Testament (Yupik Translation Committee and Wycliffe Bible Translators 2006)*/

/*
<tr>
    <th>Source Abbreviation</th>
    <th>Full Source</th>
</tr>
*/

function exampleCitations(){
    let table = document.getElementById("citation_table");
    citations.forEach((cite) => {
        let newRow = table.insertRow();
        let abbv = newRow.insertCell(0);
        abbv.id = cite.abbreviation;
        let title = newRow.insertCell(1)
        let citeCell = newRow.insertCell(2);
        abbv.innerHTML = cite.abbreviation;
        title.innerHTML = `<i>${cite.title}</i>`;
        citeCell.innerHTML = `<a href="#${cite.id}">${cite.short_citation}</a`;
    });
}

function references(){
    let refs = document.getElementById("references");
    citations.forEach((cite) => {
        let newRef = `<p id="${cite.id}">${full_citation}</p>`;
        refs.innerHTML += newRef;
    });
}

const citations = [
    {
        "abbreviation":"AANGHHAQ",
        "title":"Aanghhaq",
        "id":"AynanaNakazik1987",
        "short_citation":"Aynana and Nakazik (1987)",
        "full_citation":"Aynana, L. I, and G. A. Nakazik 1981. Aanghhaq (Iskorka (the Little Spark)). Leningrad: Prosveshchenie. Yupik readings of various sorts for children and older children, in Cyrillic without translation. Reprinted in 1987."
    },
    {
        "abbreviation":"AGHNAGH. KAYNGE.",
        "title":"Aghnaghaghhaq Kayngeni",
        "id":"Slwooko1976a",
        "short_citation":"Slwooko (1976a)",
        "full_citation":"Slwooko, Grace. (Akulmii) 1976a. Aghnaghaghhaq Kayngeni (The Eskimo girl and the brown bear). Nome: Bilingual Education Resource Center. Traditional story with English translation."
    },
    {
        "abbreviation":"AKIINGQWAAGH.",
        "title":"Akiingqwaaghneghet",
        "id":"Apassingok1994",
        "short_citation":"Apassingok (1994)",
        "full_citation":"Apassingok, Anders (Iyaaka), 1994. Akiingqwaghneghet I Echoes. Unalakleet: Bering Strait School District."
    },
    {
        "abbreviation":"AYU. UNGIP. I",
        "title":"Ayumiim Ungipaghaatangi I",
        "id":"Kaneshiro1972",
        "short_citation":"Kaneshiro (1972)",
        "full_citation":"Kaneshiro, Vera O. (Uqiitlek), et al., transcribers and editors, 1972. Ayumiim Ungipaghaatangi I Stories of Long Ago. Vol. I. Fairbanks: Alaska Native Language Program, University of Alaska. Traditional stories without translation."
    },
    {
        "abbreviation":"AYU. UNGIP. II",
        "title":"Ayumiim Ungipaghaatangi II",
        "id":"Kaneshiro1975a",
        "short_citation":"Kaneshiro (1975a)",
        "full_citation":"Kaneshiro, Vera O. (Uqiitlek), 1975a. Ayumiim Ungipaghaatangi I Stories of Long Ago. Vol. II. Fairbanks: Alaska Native Language Program, University of Alaska. Traditional stories without translation."
    },
    {
        "abbreviation":"AYU. UNGIP. III",
        "title":"Ayumiim Ungipaghaatangi III",
        "id":"Kaneshiro1975b",
        "short_citation":"Kaneshiro (1975b)",
        "full_citation":"Kaneshiro, Vera O. (Uqiitlek), 1975b. Ayumiim Ungipaghaatangi I Stories of Long Ago. Vol. III. Fairbanks: Alaska Native Language Program, University of Alaska. Traditional stories without translation."
    },
    {
        "abbreviation":"AYU. UNGIP. IV",
        "title":"Ayumiim Ungipaghaatangi IV",
        "id":"Kaneshiro1975c",
        "short_citation":"Kaneshiro (1975c)",
        "full_citation":"Kaneshiro, Vera O. (Uqiitlek), 1975c. Ayumiim Ungipaghaatangi I Stories of Long Ago. Vol. IV. Fairbanks: Alaska Native Language Program, University of Alaska. Traditional stories without translation."
    },
    {
        "abbreviation":"IGHSANITALGHII",
        "title":"Ighsanitalghii Afsengaq",
        "id":"Badten1972",
        "short_citation":"Badten (1972)",
        "full_citation":"Badten, Adelinda W. (Aghnaghaghpik), and Michael E. Krauss. translator, 1972. Ighsanitalghii Afsengaq (The lazy mouse). Fairbanks:Alaska Native Language Program. Translation from Central Yup'ik Qessanquq Avelngaq (Mather, E.1971), without English translation."
    },
    {
        "abbreviation":"KALLAG.",
        "title":"Kallagneghet",
        "id":"Apassingok1993",
        "short_citation":"Apassingok (1993)",
        "full_citation":""
    },
    {
        "abbreviation":"KIILUUQ",
        "title":"Kiiluuq",
        "id":"Orr1975",
        "short_citation":"Orr (1975)",
        "full_citation":""
    },
    {
        "abbreviation":"MATERIALY",
        "title":"Materialy Po Yazyku u Fol'klory Eskimosov",
        "id":"Rubtsova1954",
        "short_citation":"Rubtsova (1954)",
        "full_citation":""
    },
    {
        "abbreviation":"MRS. DELLA W.",
        "title":"Mrs. Della Waghiyi's St. Lawrence Island Yupik Texts with Grammatical Analysis",
        "id":"Nagai2001",
        "short_citation":"Nagai (2001)",
        "full_citation":""
    },
    {
        "abbreviation":"NAAYV. PILCH.",
        "title":"Naayvamun Pilghiit",
        "id":"Kaneshiro1974a",
        "short_citation":"Kaneshiro (1974a)",
        "full_citation":""
    },
    {
        "abbreviation":"NATEN YUUK",
        "title":"Naten Yuuk Paghqiimaa Tengaaneghmeng",
        "id":"Tambi1936",
        "short_citation":"Tambi (1936)",
        "full_citation":""
    },
    {
        "abbreviation":"PANGEGH.",
        "title":"Pangeghtellghet",
        "id":"KaneshiroBadten1975",
        "short_citation":"Kaneshiro and Badten (1975)",
        "full_citation":""
    },
    {
        "abbreviation":"PINGA. KAVII.",
        "title":"Pingayut Kaviighhaat",
        "id":"Kaneshiro1973",
        "short_citation":"Kaneshiro (1973)",
        "full_citation":""
    },
    {
        "abbreviation":"PIYAA.",
        "title":"Piyaatalghiit",
        "id":"Kaneshiro1975d",
        "short_citation":"Kaneshiro (1975d)",
        "full_citation":""
    },
    {
        "abbreviation":"QATEP.",
        "title":"Qateperewaaghmeng Aatkaqelghii Yuuk",
        "id":"Slwooko1977",
        "short_citation":"Slwooko (1977a)",
        "full_citation":""
    },
    {
        "abbreviation":"QUNGLUK",
        "title":"Qungluk Liillghii Pugimameng",
        "id":"Kaneshiro1974b",
        "short_citation":"Kaneshiro (1974b)",
        "full_citation":""
    },
    {
        "abbreviation":"SIKIGG. METEGH.",
        "title":"Sikiggaankuk Meteghllugenkuk",
        "id":"Slwooko1976b",
        "short_citation":"Slwooko (1976b)",
        "full_citation":""
    },
    {
        "abbreviation":"SIKU. ESLA. ESGHA.",
        "title":"Sikumengllu Eslamenglllu Esghapalleghput",
        "id":"Oozevaetal1997",
        "short_citation":"Oozeva et. al. (1997)",
        "full_citation":""
    },
    {
        "abbreviation":"SIVUQ. NANGAGH. 1",
        "title":"Sivuqam Nangaghnegha, vol. 1",
        "id":"Apassingoketal1985",
        "short_citation":"Apassingok et. al. (1985)",
        "full_citation":""
    },
    {
        "abbreviation":"SIVUQ. NANGAGH. 2",
        "title":"Sivuqam Nangaghnegha, vol. 2",
        "id":"Apassingoketal1987",
        "short_citation":"Apassingok et. al. (1987)",
        "full_citation":""
    },
    {
        "abbreviation":"SIVUQ. NANGAGH. 3",
        "title":"Sivuqam Nangaghnegha, vol. 3",
        "id":"Apassingoketal1989",
        "short_citation":"Apassingok et. al. (1989)",
        "full_citation":""
    },
    {
        "abbreviation":"SIVUQ. UNGIPAGH. (I)",
        "title":"Sivuqam Ungipaghaatangi",
        "id":"Slwooko1977",
        "short_citation":"Slwooko (1977b)",
        "full_citation":""
    },
    {
        "abbreviation":"SIVUQ. UNGIPAGH. II",
        "title":"Sivuqam Ungipaghaatangi II",
        "id":"Slwooko1979",
        "short_citation":"Slwooko (1979)",
        "full_citation":""
    },
    {
        "abbreviation":"SIVUQ. UNGIPAM.",
        "title":"Sivuqam Ungipamsugi",
        "id":"Irrigooetal1977",
        "short_citation":"Irrigoo et. al. (1977)",
        "full_citation":""
    },
    {
        "abbreviation":"SULUWET",
        "title":"Suluwet",
        "id":"Apassingok1995",
        "short_citation":"Apassingok (1995)",
        "full_citation":""
    },
    {
        "abbreviation":"UNGAZ. UNGIP.",
        "title":"Ungazighmiit Ungipaghaatangit",
        "id":"BadtenKrauss1971",
        "short_citation":"Badten and Krauss (1971)",
        "full_citation":""
    },
    {
        "abbreviation":"UNGIPAGHAGH.",
        "title":"Ungipaghaghlanga",
        "id":"Koonooka2003",
        "short_citation":"Koonooka (2003)",
        "full_citation":""
    },
    {
        "abbreviation":"UNKUS.",
        "title":"Unkusequlghiik",
        "id":"Kaneshiro1974c",
        "short_citation":"Kaneshiro (1974c)",
        "full_citation":""
    },
    {
        "abbreviation":"WORDS...PEOPLE",
        "title":"Words of the Real People",
        "id":"FienupRiordanKaplan2007",
        "short_citation":"Fienup-Riordan and Kaplan (2007)",
        "full_citation":""
    },
    {
        "abbreviation":"YUGG. KAYNGE.",
        "title":"Yuggaankuk Kayngenkuk",
        "id":"Slwooko1976c",
        "short_citation":"Slwooko (1976c)",
        "full_citation":""
    },
    {
        "abbreviation":"YUGG. MAYER. 1976",
        "title":"Yuggankuk Mayeraaghpagenkukl",
        "id":"Slwooko1976d",
        "short_citation":"Slwooko (1976d)",
        "full_citation":""
    },
    {
        "abbreviation":"YUGG. MAYER. 1978",
        "title":"Yuggankuk Mayeraaghpagenkuk",
        "id":"Slwooko1978",
        "short_citation":"Slwooko (1978)",
        "full_citation":""
    },
    {
        "abbreviation":"YUP. ULUNG. 2",
        "title":"Yupiget Ulungat 2",
        "id":"Ayngangaetal1989",
        "short_citation":"Ayn(g)anga et al. (1989)",
        "full_citation":""
    },
    {
        "abbreviation":"YUPIGET UNGIP.",
        "title":"Yupiget Ungipaghaghaatet",
        "id":"Menovshchikov1989",
        "short_citation":"Menovshchikov (1989)",
        "full_citation":""
    },
    {
        "abbreviation":"Ex. Acts 27.44",
        "title":"Test Edition - 15 Books of the Yupik New Testament",
        "id":"Wycliffe2006",
        "short_citation":"Yupik Translation Committee and Wycliffe Bible Translators (2006)",
        "full_citation":"Yupik Bible Translation Committee. 2006. Test Edition, 15 Books of the Yupik New Testament. Gambell: Yupik Translation Committee, Wycliffe Bible Translators."
    }
    ];

    exampleCitations();
    references();