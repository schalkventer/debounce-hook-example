import { useRef, useState } from "react";

/**
 * asasd
 *
 * @callback Invoke
 * @param {any} invoked
 * @returns {void}
 */

/**
 * @typedef {object} Debouncer
 * @prop {boolean} isDebouncing
 * @prop {Invoke} invoke
 */

/**
 * .......
 *
 * @param {object} props
 *
 * @param {Invoke} props.callback- The callback to fire when sufficient time
 * has elapsed (as indicated by `delay`). Will automatically pass the values
 * called with `invoke` to the `invoked` parameter.
 *
 * @param {number} [props.delay] - By default delay is one second, although it can be
 * overriden by passing a millisecond number to `delay`
 *
 * @return {Debouncer}
 */
export const useDebounce = (props) => {
  const { callback, delay = 1000 } = props;

  const ref = useRef(null);
  const [isDebouncing, setIsDebouncing] = useState(false);

  /**
   * @type {Invoke}
   */
  const invoke = (inner) => {
    setIsDebouncing(true);
    const unique = Symbol();
    ref.current = unique;

    const handler = () => {
      if (ref.current !== unique) return;
      setIsDebouncing(false);
      callback(inner);
    };

    setTimeout(handler, delay);
  };

  return {
    invoke,
    isDebouncing,
  };
};
