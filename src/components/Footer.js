import React from "react";
import '../styles/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className={'country'}>
                    <p>
                        Беларусь
                    </p>
                </div>
                <div className={'footer-info'}>
                    <div>
                        <p>
                            <a href={'https://ads.google.com/intl/ru_by/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm' +
                        '_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'}>
                            Реклама
                            </a>
                        </p>
                        <p>
                            <a href={'https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_' +
                        'source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1'}>
                            Для бизнеса
                            </a>
                        </p>
                        <p>
                            <a href={'https://about.google/?utm_source=google-BY&utm_medium=referral&utm_' +
                        'campaign=hp-footer&fg=1'}>
                                Всё о Google
                            </a>
                        </p>
                        <p>
                            <a href={'https://www.google.com/search/howsearchworks/?fg=1'}>
                                Как работает Google Поиск
                            </a>
                        </p>
                    </div>
                    <div>
                        <p><a href={'https://policies.google.com/privacy?fg=1'}>Конфиденциальность</a></p>
                        <p><a href={'https://policies.google.com/terms?fg=1'}>Условия</a></p>
                        <p><a href={'https://www.google.com/preferences?hl=ru'}>Настройки</a></p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;