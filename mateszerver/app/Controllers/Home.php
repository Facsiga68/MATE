<?php

namespace App\Controllers;

class Home extends BaseController
{
	public function index()
	{
		return view('errors/cli/error_404');
	}

	public function phpinfo()
	{
		return view('phpinfo');
	}		
}
