function is_touch_device() {
	return !!('ontouchstart' in window) || !!('onmsgesturechange' in window);
};
