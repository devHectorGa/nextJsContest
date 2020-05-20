import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ManagementMenu from './ManagementMenu';
import styles from './email-jss';

class ManagementSidebar extends React.Component {
  render() {
    const {
      classes,
      goto,
      selected,
      handleDrawerToggle,
      mobileOpen,
      list
    } = this.props;
    return (
      <Fragment>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <ManagementMenu menu={list} goto={goto} onClose={handleDrawerToggle} selected={selected} />
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            className={classes.sidebar}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <ManagementMenu menu={list} goto={goto} selected={selected} />
          </Drawer>
        </Hidden>
      </Fragment>
    );
  }
}

ManagementSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  goto: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ManagementSidebar);
