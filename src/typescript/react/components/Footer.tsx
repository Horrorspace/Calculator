import * as React from 'react'


export default class Footer extends React.Component<any, {}> {
    constructor(props: any) {
      super(props);
    }
    render() {
      return (
        <footer className="footer">
        <section className="info-wrap">
          <p className="info-text">My links:</p>
          <ul className="info-links-list">
            <li className="info-links-item">
              <a href="https://github.com/Horrorspace" className="info-link">
                <span className="hidden">Github</span>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="info-links-item">
              <a href="https://codepen.io/horrorspace" className="info-link">
                <span className="hidden">Codepen</span>
                <i className="fab fa-codepen"></i>
              </a>
            </li>
            <li className="info-links-item">
              <a href="https://www.freecodecamp.org/fccd9254394-566b-4e5e-ab9b-7446360d7b9c" className="info-link">
                <span className="hidden">FreeCodeCamp</span>
                <i className="fab fa-free-code-camp"></i>
              </a>
            </li>
          </ul>
        </section>
      </footer>
      )
    }
}