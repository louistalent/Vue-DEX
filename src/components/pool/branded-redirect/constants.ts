interface BrandedRedirectData {
  id: string;
  title: string;
  description: string;
  btnText: string;
  link: string;
}

export const BRANDED_REDIRECT_DATA: Record<string, BrandedRedirectData> = {
  xave: {
    id: 'xave',
    title: 'brandedRedirect.xave.title',
    description: 'brandedRedirect.xave.description',
    btnText: 'brandedRedirect.xave.btnText',
    link: 'https://app.xave.co/',
  },
};
