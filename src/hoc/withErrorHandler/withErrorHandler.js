import React, {Component, Fragment} from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  // eslint-disable-next-line react/display-name
  return class extends Component {
    state = {
      error: null
    };

    UNSAFE_componentWillMount() {
      this.reqIntercepter = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });

      this.respIntercepter = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });

    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqIntercepter)
      axios.interceptors.response.eject(this.respIntercepter)
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    };

    render() {
      return (
        <Fragment>
          <Modal show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  }
}

export default withErrorHandler;
