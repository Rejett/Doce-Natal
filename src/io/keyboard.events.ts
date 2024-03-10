export class KeyboardListener {
  public static PRESSED_KEYS: string[] = [];
  public static REALEASED_KEYS: string[] = [];

  static addKeyBoardlisteners = () => {
    document.addEventListener("keydown", ({ key }: KeyboardEvent) => {
      if (!KeyboardListener.PRESSED_KEYS.includes(key)) {
        KeyboardListener.PRESSED_KEYS = [...KeyboardListener.PRESSED_KEYS, key];
      }
    });

    document.addEventListener("keyup", ({ key }: KeyboardEvent) => {
      if (!KeyboardListener.REALEASED_KEYS.includes(key)) {
        KeyboardListener.REALEASED_KEYS = [
          ...KeyboardListener.PRESSED_KEYS,
          key,
        ];
      }

      KeyboardListener.PRESSED_KEYS = KeyboardListener.PRESSED_KEYS.filter(
        (K) => K !== key
      );
    });
  };
}
