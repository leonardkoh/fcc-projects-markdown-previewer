import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import marked from 'marked';

marked.setOptions({
    gfm: true,
    breaks: true,
});

const renderer = new marked.Renderer();

const Editor = (props) => {
    return (<textarea id="editor" value={props.value} onChange={props.onChange}></textarea>)
}

const Previewer = (props) => {
    return ( <div className="container-fluid" id="preview" dangerouslySetInnerHTML={{__html: marked(props.value, {breaks: true, renderer})}} />)
}

const placeholder = '# Heading\n## Sub-heading\n\n[This is a link.](https://www.freecodecamp.org)\n\n`This is inline code.`\n\n```\nThis is a code block.\n```\n\nThis is a list:\n* item 1\n* item 2\n* item 3\n\n> This is a blockquote.\n\n![Image](https://miro.medium.com/fit/c/256/256/0*M-pxLuwCMoMo52W1.png)\n\n**This is bolded text.**'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: placeholder,
        }
 
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value,
        })
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div id="spacer"></div>
                <h1>Editor</h1> 
                <Editor value={this.state.input} onChange={this.handleChange} />
                <h1>Preview</h1> 
                <Previewer value={this.state.input} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));