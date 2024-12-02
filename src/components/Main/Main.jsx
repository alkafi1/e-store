import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.defer = true; // Ensures script runs after HTML parsing
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const scripts = [
            'src/assets/assets/js/popper.min.js',
            'src/assets/assets/js/bootstrap.min.js',
            'src/assets/assets/js/vendor/jquery-3.5.1.min.js',
            'src/assets/assets/js/vendor/modernizr-3.7.1.min.js',
            'src/assets/assets/js/slick.min.js',
            'src/assets/assets/js/jquery-vj-accordion-steps.js',
            'src/assets/assets/js/jquery-ui.min.js',
            'src/assets/assets/js/jquery.form-validator.min.js',
            'src/assets/assets/js/jquery.nice-select.min.js',
            'src/assets/assets/js/jquery.formatter.min.js',
            'src/assets/assets/js/count-up.min.js',
            'src/assets/assets/js/main.js',
        ];

        const loadScripts = async () => {
            for (const src of scripts) {
                try {
                    await loadScript(src);
                    console.log(`Loaded script: ${src}`);
                } catch (error) {
                    console.error(`Failed to load script: ${src}`, error);
                }
            }
        };

        loadScripts();

        return () => {
            scripts.forEach((src) => {
                const script = document.querySelector(`script[src="${src}"]`);
                if (script) document.body.removeChild(script);
            });
        };
    }, []);
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;