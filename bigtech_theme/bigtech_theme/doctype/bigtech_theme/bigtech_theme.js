// Copyright (c) 2026, Keytech and contributors
// For license information, please see license.txt

frappe.ui.form.on("Bigtech Theme", {
	refresh(frm) {
		frm.add_custom_button(__("Refresh Theme"), function () {
			var t = window.BigtechDeskTheme;
			if (t && typeof t.refreshTheme === "function") {
				t.refreshTheme();
			}
			frappe.show_alert({ message: __("Theme refreshed"), indicator: "green" });
		});
	},
});
