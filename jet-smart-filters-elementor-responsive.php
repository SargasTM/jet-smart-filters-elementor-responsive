<?php
/**
 * Plugin Name: JetSmartFilters - Elementor Responsive
 * Plugin URI:  #
 * Description: Adds the ability to use Element responsive options.
 * Version:     1.0.0
 * Author:      Crocoblock
 * Author URI:  https://crocoblock.com/
 * License:     GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

add_action( 'wp_enqueue_scripts', 'jet_smart_filters_elementor_responsive_enqueue_scripts' );

if ( ! function_exists( 'jet_smart_filters_elementor_responsive_enqueue_scripts' ) ) {

	function jet_smart_filters_elementor_responsive_enqueue_scripts() {

		wp_enqueue_script(
			'jet-smart-filters-elementor-responsive',
			trailingslashit( plugin_dir_url( __FILE__ ) ) . 'assets/js/jet-smart-filters-elementor-responsive.js',
			array( 'jet-smart-filters' ),
			'1.0.0',
			true
		);

	}

}
