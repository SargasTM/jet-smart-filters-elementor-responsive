(function ($) {
	const JetSmartFiltersElementorResponsive = {
		deviceMode: null,

		init() {
			this.disableFilters();
			$(window).on('resize', this.disableFilters);
		},

		destroy() {
			$(window).off('resize', this.disableFilters);

			const filterGroups = window.JetSmartFilters.filterGroups;

			if (!filterGroups)
				return;

			for (const key in filterGroups) {
				const filterGroup = filterGroups[key],
					filters = filterGroup.filters;

				filters.forEach(filter => {
					filter.disabled = false;
				});
			}
		},

		disableFilters() {
			const filterGroups = window.JetSmartFilters.filterGroups;
			let deviceMode = elementorFrontend.getCurrentDeviceMode();

			if (!filterGroups || deviceMode === this.deviceMode)
				return;

			this.deviceMode = deviceMode;

			for (const key in filterGroups) {
				const filterGroup = filterGroups[key],
					filters = filterGroup.filters;

				filters.forEach(filter => {
					filter.disabled = isSomeParentHasClass(filter.containerElement, 'elementor-hidden-' + deviceMode)
						? true
						: false;
				});
			}
		}
	}

	window.JetSmartFiltersElementorResponsive = JetSmartFiltersElementorResponsive;

	$(document).ready(function () {
		JetSmartFiltersElementorResponsive.init();
	});

	function isSomeParentHasClass(element, className) {
		if (!(element instanceof Element))
			return false;

		do {
			if (element.classList && element.classList.contains(className)) {
				return true;
			}

			element = element.parentNode;
		} while (element);

		return false;
	}

})(jQuery);