import { config_contactForm } from '../configs/emailing';

export function getNativeMailClientLink(
	_email: string | null,
	_body: string | null,
	_name: string | null
) {
	if (!_email || !_body || !_name) return null;

	const body = `${_body}\n\n\n\n\n——————————————————\nname: ${_name}\nemail: ${_email}`;

	return `mailto:${
		config_contactForm.defaultEmail
	}?subject=${encodeURIComponent(
		config_contactForm.default_subject
	)}&body=${encodeURIComponent(body)}`;
}
