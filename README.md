# Lab

Lab создан для ведения списка лаборантов с данными о рождении, номером телефона и текущей должностью.

App.js:

```
class App extends Component {

    componentDidMount() {
        this.props.dispatch(fetchItems());
    }

    render() {
        return (

            <div className="app__wrapper">
                <h1 className="app__title">Лаборанты</h1>
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <Filter/>
                            <div className="main-table table-responsive">
                                <Table/>
                            </div>
                        </Route>
                        <Route path="/add">
                            <AddForm/>
                        </Route>
                        <Route path="/edit/:id" component={EditForm}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       state
    }
};
```

index.js:
```
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root')
);
```

package.json
```
{
  "name": "lab",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://koffemeow.github.io/Lab/",
  "dependencies": {
    "@testing-library/jest-dom": "^5.15.0",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "cra-template": "1.1.2",
    "react": "^17.0.2",
    "react-bootstrap-table-next": "^4.0.3",
    "react-bootstrap-table2-editor": "^1.4.0",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.6",
    "react-scripts": "4.0.3",
    "sass": "^1.43.4",
    "web-vitals": "^1.1.2",
    "bootstrap": "^4.5.0",
    "date-fns": "^2.14.0",
    "formik": "^2.1.4",
    "lodash": "^4.17.15",
    "react-datepicker": "^3.0.0",
    "react-input-mask": "^3.0.0-alpha.2",
    "react-router-dom": "^5.2.0",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0",
    "yup": "^0.29.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "gh-pages": "^3.2.3"
  }
}
```
Первычные данные о сотрудниках лаболатории находяться [тут](https://github.com/KoffeMeow/Lab/blob/main/src/assets/employees.json).
Сайт рапологается по [ссылке](https://koffemeow.github.io/Lab/).
