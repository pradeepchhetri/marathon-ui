var Util = require("../helpers/Util");
var classNames = require("classnames");
var React = require("react/addons");

function modalSizeClassName(size) {
  return (size == null) ? "" : "modal-" + size;
}

var ModalComponent = React.createClass({
  displayName: "ModalComponent",
  propTypes: {
    centered: React.PropTypes.bool,
    children: React.PropTypes.node,
    dismissOnClickOutside: React.PropTypes.bool,
    onDestroy: React.PropTypes.func,
    size: React.PropTypes.string
  },

  componentDidMount: function () {
    this.timeout = setTimeout(this.transitionIn, 10);
  },

  destroy: function () {
    this.props.onDestroy();
  },

  getDefaultProps: function () {
    return {
      dismissOnClickOutside: true,
      onDestroy: Util.noop,
      size: null
    };
  },

  getInitialState: function () {
    return {
      isIn: false
    };
  },

  onClick: function (event) {
    if (this.props.dismissOnClickOutside &&
      (Util.hasClass(event.target, "modal") ||
      Util.hasClass(event.target, "modal-dialog"))) {
      this.destroy();
    }
  },

  transitionIn: function () {
    this.setState({isIn: true});
  },

  render: function () {
    var modalDialogClassName =
      "modal-dialog " + modalSizeClassName(this.props.size);

    var modalBackdropClassName = classNames({
      "modal-backdrop fade": true,
      "in": this.state.isIn
    });

    var modalClassName = classNames({
      "modal fade": true,
      "in": this.state.isIn,
      "modal-centered": this.props.centered
    });

    return (
      <div>
        <div className={modalClassName}
            onClick={this.onClick}
            role="dialog"
            aria-hidden="true"
            tabIndex="-1">
          <div className={modalDialogClassName}>
            <div className="modal-content">
              {this.props.children}
            </div>
          </div>
        </div>
        <div className={modalBackdropClassName}></div>
      </div>
    );
  }
});

module.exports = ModalComponent;
