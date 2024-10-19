import 'es-module-lexer';
import './chunks/astro-designed-error-pages_D2uw_cpA.mjs';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_DTRKOMoF.mjs';
import { u as useTranslations } from './chunks/translations_CnOezYSw.mjs';

const onRequest$1 = defineMiddleware((context, next) => {
  context.locals.t = useTranslations(context.currentLocale);
  return next();
});

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
