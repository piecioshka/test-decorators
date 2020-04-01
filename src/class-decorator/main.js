import './index.html';

function Component({ template }) {
    return (target) => {
        target.prototype.render = ($target) => {
            const parser = new DOMParser();
            const document = parser.parseFromString(template, 'text/html');
            const $element = document.body.firstElementChild;
            $target.append($element);
        };
    }
}

@Component({
    template: `
        <nav>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </nav>
    `
})
class Menu {
}

const m = new Menu();
m.render(document.querySelector('#app'));
