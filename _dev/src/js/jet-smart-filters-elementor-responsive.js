(function ($) {
	const JetSmartFiltersElementorResponsive = {
		deviceMode: null,

		init() {
			$(document).on('jet-smart-filters/inited', this.disableFilters);
			$(window).on('resize', () => {
				if (this.deviceMode === elementorFrontend.getCurrentDeviceMode())
					return;

				this.disableFilters();
			});
		},

		disableFilters() {
			const filterGroups = window.JetSmartFilters.filterGroups;

			if (!filterGroups)
				return;

			this.deviceMode = elementorFrontend.getCurrentDeviceMode();

			for (const key in filterGroups) {
				const filterGroup = filterGroups[key],
					filters = filterGroup.filters;

				filters.forEach(filter => {
					filter.disabled = isSomeParentHasClass(filter.containerElement, 'elementor-hidden-' + this.deviceMode)
						? true
						: false;
				});
			}
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
		}
	};

	window.JetSmartFiltersElementorResponsive = JetSmartFiltersElementorResponsive;

	JetSmartFiltersElementorResponsive.init();

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