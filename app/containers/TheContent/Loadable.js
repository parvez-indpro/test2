/**
 *
 * Asynchronously loads the component for TheContent
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
