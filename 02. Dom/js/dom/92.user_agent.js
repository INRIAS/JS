/*Este ejerccio realizara la detencion de caracteristicas desde donde se conectan(Simulamos) y que dispositivo es

Caracteristicas
User Agent
Plataforma
Navegador

*/

const d = document,
    w = window,
    n = navigator,
    ua = n.userAgent;

export default function userAgent(id) {
    const $id = d.getElementById(id),

        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function () {
                return this.android() || this.ios() || this.windows()
            }
        },

        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac() || this.windows()
            },
        },

        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge()

            },

        };
    $id.innerHTML = `
         <ul>
            <li>User Agent: ${ua}</li>
            <li>Plataforma: ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
            <li>Navegador: ${isBrowser.any()}</li>
         </ul >
    `;

    /*if (isBrowser.chrome()) {
        location.href="https://translate.google.com/?hl=es&sl=en&tl=es&text=navigation%0Anavigator&op=translate"
    }*/
} 

