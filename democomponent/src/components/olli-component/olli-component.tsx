import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'olli-component',
    styleUrl: 'olli-component.css',
    shadow: true, // without that, we could override host component styles more easily
})
export class OlliComponent {
    // needed for params in the component calling
    @Prop() first: string;
    @Prop() last: string;

    connectedCallback() {
        console.log("connectedCallback")
    }

    componentWillRender() {
        console.log("componentWillRender")
    }

    componentWillLoad() {
        console.log("componentWillLoad")
    }

    componentDidLoad() {
        console.log("componentDidLoad")
    }

    componentDidRender() {
        console.log("componentDidRender")
    }

    // only called if leaving site by link
    disconnectedCallback() {
        console.log("disconnectedCallback")
    }

    render() {
        return (
            <div class="text-purple-600">
                <h1>{this.first}</h1>
                <p>{this.last}</p>
            </div>
        );
    }

}
