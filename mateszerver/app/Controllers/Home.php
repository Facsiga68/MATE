<?php

namespace App\Controllers;

class Home extends BaseController
{
	protected $session;

    function __construct() {
        if (session_status() == PHP_SESSION_NONE)
        {
            $this->session = \Config\Services::session();;
        }
	}

	public function index()
	{
		$belepadat = [
			'id' => 1,
			'fnev' => "Belépési név",
			'sznev' => "Személy neve",
			'belepve' => TRUE
		];
		$this->session->set($belepadat);
		return view('phpinfo');
	}

	public function phpinfo()
	{
		return view('phpinfo');
	}		
}
