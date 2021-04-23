import React from 'react';
import { connect } from 'react-redux';

const SwitchLang = ({ locale }) => <select onChange={(event) => handleLangage(event.target.value)}><option value="FR">FR</option><option value="EN">EN</option></select>;


const handleLangage= (langageSelected) => {
  dispatch(setLangage(langageSelected));
};

const mapDispatchToProps = (dispatch) => ({
  handleLanguage: () => dispatch(getProductsFromApi()),
});

export default connect(null, mapDispatchToProps)(SwitchLang);
