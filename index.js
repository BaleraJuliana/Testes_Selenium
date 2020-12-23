const { Builder, By, Key, util } = require("selenium-webdriver");
const { resource } = require("selenium-webdriver/http");
var fs = require("fs");

var PreparedArray = [];

var Main = async () => {

    let driver = await new Builder().forBrowser("chrome").build();

    // Entrar na tela inicial do prosas
    await driver.get("https://prosas.com.br");

    // Utilizar o link para editais
    await driver.findElement(By.linkText("EDITAIS")).click();

    // Pesquisar por editais por determinada localidade e outro filtro da pesquisa
    await driver.findElement(By.name("nome-filtro")).sendKeys("AMBEV");
    await driver.findElement(By.name("autocompleteField")).sendKeys("Jacareí SP");
    await driver.findElement(By.css(".ng-binding > .right:nth-child(3) .material-icons")).click();

Executar(
    4000,
    driver,
    "md-label",
    "educação",
    () => {
        Executar(
            4000,
            driver,
            "btn-verde",
            "aplicar",
            () => {
                Executar(
                    4000,
                    driver,
                    "btn-azul",
                    "filtrar",
                    () => {
                        setTimeout(async () => {
                            await driver.quit();
                        }, 10000)

                    })
            })
    });

}

var Executar = (delay = 10, driver, className, someText, nextMove) => {

   setTimeout(() => {

       driver.findElements(By.className(className)).then(listaElementos => {
           for (let elemento of listaElementos) {
               try {
                   elemento.getText().then(text => {

                       if (text.toLowerCase().trim().indexOf(someText) != -1) {
                           elemento.click().then(() => {
                               return nextMove();
                           })
                       }
                   })
               } catch (exception) {
                   SaveLog(fileName = exception);
               }
           }
       })
   }, delay)

}

var SaveLog = (fileName = "log.txt", message = "Messagem vazia") => {

    let path = __dirname + "\\" + fileName;
    try {
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, "log da aplicação \r\n", "utf-8");
        }
        let time = new Date();
        fs; fs.appendFile(path, `\r\n ${time.getDay()}-${time.getMonth()}-${time.getYear()} ${time.getHours()}:${time.getMinutes()} ${message} \r\n`, 'utf-8', () => {
            console.log(`Log gravado em ${fileName} -- ${time.getHours()}:${time.getMinutes()}`);
        })
    } catch {
        console.log("Erro ao gravar arquivo;");
    }
}

Main();