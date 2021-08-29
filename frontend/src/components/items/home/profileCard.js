import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfile } from "../../../actions/profile";

class ProfileCard extends Component {
  static propTypes = {
    profile: PropTypes.array.isRequired,
    getProfile: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    return (
      <Fragment>
        {this.props.profile.map((profile) => (
          <div key={profile.profileId}>
            <span className="tag is-primary">{profile.resturantName}</span>

            <div className="box has-text-info-dark">
              <p>{profile.phone}</p>
              <p className="has-text-success-dark" style={{ fontSize: "10px" }}>
                {profile.description}
              </p>
            </div>
            <div className="box has-background-warning-dark">
              <p className="has-text-info-light">
                {profile.typeItem == 1
                  ? "Bars"
                  : profile.typeItem == 2
                  ? "Restaurants"
                  : profile.typeItem == 3
                  ? "Club"
                  : "Others"}
              </p>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { getProfile })(ProfileCard);
