export const splitThousand = (number) => {
  if (!number && number !== 0) return "";
  return `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const rupiah = (integer) => {
  if (!integer) return "Rp";
  return `Rp${splitThousand(integer)}`;
};

export const moneyToString = (nominal) => {
  const _isNominalValid = (nominal) => {
    const regex = new RegExp(/^\d+$/);
    return !regex.test(nominal);
  }
  const _nominalWording = (nominal) => {
    const UNIQUE_TWELVE = 12;
    const UNIQUE_TWENTY = 20;
    const UNIQUE_TWO_HUNDRED = 200;
    const UNIQUE_TWO_THOUSAND = 2000;
    const UNIQUE_NAMING = [
      '', '1 ', '2 ', '3 ', '4 ', '5 ',
      '6 ', '7 ', '8 ', '9 ', '10 ',
      '11 '
    ];
    const TEN = 10;
    const ONE_HUNDRED = 100;
    const ONE_THOUSAND = 1000;
    const ONE_MILLION = 1000000;
    const ONE_BILLION = 1000000000;
    if (nominal < ONE_HUNDRED) {
      if (nominal < UNIQUE_TWELVE)
        return UNIQUE_NAMING[nominal];
      if (nominal < UNIQUE_TWENTY)
        return _nominalWording(nominal % TEN) + 'Belas ';
      return _nominalWording(Math.floor(nominal / TEN)) + 'Puluh ' + _nominalWording(nominal % TEN);
    }
    if (nominal < ONE_THOUSAND) {
      if (nominal < UNIQUE_TWO_HUNDRED)
        return 'Seratus ' + _nominalWording(nominal % ONE_HUNDRED);
      return _nominalWording(Math.floor(nominal / ONE_HUNDRED)) + 'Ratus ' + _nominalWording(nominal % ONE_HUNDRED);
    }
    if (nominal < ONE_MILLION) {
      if (nominal < UNIQUE_TWO_THOUSAND)
        return 'Seribu ' + _nominalWording(nominal % ONE_THOUSAND);
      return _nominalWording(Math.floor(nominal / ONE_THOUSAND)) + 'Ribu ' + _nominalWording(nominal % ONE_THOUSAND);
    }
    if (nominal < ONE_BILLION)
      return _nominalWording(Math.floor(nominal / ONE_MILLION)) + 'Juta ' + _nominalWording(nominal % ONE_MILLION);
    return _nominalWording(Math.floor(nominal / ONE_BILLION)) + 'Miliar ' + _nominalWording(nominal % ONE_BILLION);
  }
  if (_isNominalValid(nominal))
    return 'Nol Rupiah';
  return _nominalWording(nominal);
}

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  const re =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone));
};